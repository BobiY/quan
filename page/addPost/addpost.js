import React,{ Component } from 'react';
import { render } from 'react-dom';
//添加文章组件
export default class Add extends Component {
	constructor(props) {
        super();
		this.state = {
			msg:'',
			show:true
		}
	}
	//点击提交文章信息
	handleClick(){
		const postName = this.refs.postName.value;
		const cateName = this.refs.select.value;
        const content = this.refs.textarea.value;
		const _ = this;
		let update = '';
		//"http://119.23.79.243:5000/admin/post/add"
		if( this.props.date ){
           update = this.props.date._id
		}
		console.log(update);
		$.ajax({
			url:"http://localhost:5000/admin/post/add",
			method:"POST",
			data:{ postName,cateName,content,update },
			success:function (date) {
				if(date.success){
					console.log(date);
					//文章保存成功后就跳转到
					window.location = '/';
				} else {
                    _.setState({
						msg:date.msg,
						show:date.success
					});
					setTimeout( () =>{
						_.setState({
							msg:date.msg,
							show:true
						})
					},2000 )
				}
			}
		})
	}
	render(){
        return (
            <div className = 'editor'>
			    <div className = 'add'><a href = '/' title = '返回首页'>{"React-Blog"}</a><span>{'添加文章'}</span></div>
			    <div className = 'form'>
				    <div className = 'text'>
				    <p>文章名称：<input type = "text" ref = 'postName' placeholder = '请输入章名称' defaultValue = { this.props.date ? this.props.date.title : ""   }/></p>
					<p>文章分类：<select ref = "select" defaultValue = { this.props.date ? this.props.date.cate : "react" }>
					                <option>react</option>
					                <option>redux</option>
                                    <option>node</option>
									<option>express</option>
									<option>css3</option>
									<option>html5</option>
					            </select>
					</p>
					</div>
				    <textarea ref='textarea' defaultValue = { this.props.date ? this.props.date.content : ""   }/>
				    <a onClick = {this.handleClick.bind(this)} className = 'submit'>{'提交'}</a>
				</div>
				{
					!this.state.show ? <div className = 'failMsg'>{this.state.msg}</div> : null
				}
            </div>
        )
    }
	componentDidMount (){
		const textbox = this.refs.textarea;
		//启动富文本编辑器
		const editor = new Simditor({
			textarea: $(textbox)
		});
	}
}
