import React,{ Component } from 'react';
import '../../css/login.css';

export default class Login extends Component{
	constructor(props) {
        super();
		this.state = {
			status:false,
			msg:"",
			title:''
		}
	}

	//点击提交表单进行后台验证，这里应该整理为发送action，后期做管理
	tijiao(){
		const _ = this;
		var name = this.refs.user.value;
		var pass = this.refs.password.value;
		this.refs.user.value = "";
		this.refs.password.value = "";
		let action = (this.state.title === '' || this.state.title === '登录') ? 'login' : 'regirest';
		//let url = `http://119.23.79.243:5000/users/${action}`;
		let url = `http://loaclhost:5000/users/${action}`;
		let str = "",success
		if( url.indexOf('users') !== -1){
			$.post({
				url:url,
				method:"POST",
				data:{ name,pass },
				success:function (date) {
					if(action !== 'regirest'){
						if(date.indexOf('user') != -1){
							//登录失败留在这里继续登陆或者点击标题返回返回首页
	                         str = "登录失败，请检查用户名和密码";
	                         success = true;
							 //登录失败时设置提示信息
							 _.setState({
		 	                    status:success,
		 						msg:str
							})
						} else {
							//成功后跳转的地址
							/**
	                           这里返回的数据是一个页面的字符串，如果是在用户页面，说明没有登录成功，就要留在这继续登陆，如果登录成功了就走重定向的地址，跳回列表页
							*/
						   window.location = '/';
						}
					} else {
						if( date.success ) {
							_.setState({
								title:'登录',
								status:date.success,
								msg:date.msg
							})
						} else {
							_.setState({
								status:!date.success,
								msg:date.msg
							})
						}
					}
				},
				error:function (date) {
					console.log(date);
				}
			})
		}
	}
	close(){
		this.setState({
			status:false,
		})
	}
	componentWillMount(){
		this.setState({
			title:this.props.title
		})
	}
	componentWillReceiveProps(props){
		this.setState({
			title:props.title
		})
	}
	render(){
		return (
			<div className = "login" >
                <div className = 'wrapper'>
				    <div className = 'top'>
                        <div className = 'left'>
						    {
								this.state.title ? <h3>{`用户${this.state.title}`}</h3> : <h3>{`用户登录`}</h3>
							}
							<p><input className = 'user' placeholder= '邮箱 / 用户名' ref='user' /></p>
							<p><input
							className = 'user' placeholder= '密码' ref='password' /></p>
							{
								this.state.status ?
								    (
										<div className = 'msg'>
		                                     <p><span onClick = {this.close.bind(this)}> X </span> {this.state.msg}</p>
										</div>
									) :null
							}
							<p><a className = 'btn' onClick = {this.tijiao.bind(this)}>{this.state.title ? this.state.title : '登录'}</a></p>
						</div>
						<div className = 'right'>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
