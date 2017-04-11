import React,{ Component } from 'react';
import '../../dist/html/css/login.css';

export default class Login extends Component{
	constructor(props) {
        super();
		this.state = {
			status:false,
			msg:"",
			title:''
		}
	}
	tijiao(){
		//console.log(11111);
		var _ = this;
		var name = this.refs.user.value;
		var pass = this.refs.password.value;
		this.refs.user.value = "";
		this.refs.password.value = "";
		let action = (this.props.title === '' || this.props.title === '登录') ? 'login' : 'regirest'
		//let url = `http://yaoreact.duapp.com/users/${action}`
		let url = `http://localhost:5000/users/${action}`
		//console.log(url);
		if( url.indexOf('users') !== -1){
			$.post({
				url:url,
				method:"POST",
				data:{ name,pass },
				success:function (date) {
					_.setState({
	                    status:date.success,
						msg:date.msg
					})
					if(action === 'regirest' ){
						_.setState({
							title:'登录'
						})
					} else {
					    window.location = '/';
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
