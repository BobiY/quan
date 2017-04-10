import React,{ Component } from 'react';
import { render } from 'react-dom';
import Simditor from 'simditor';
import '../../node_modules/simditor/styles/simditor.css';
import '../../dist/html/css/addPost.css';
class Add extends Component {
	constructor(props) {
        super();
	}
	componentDidMount (){
        const textbox = this.refs.textarea;
        const editor = new Simditor({
            textarea: $(textbox)
        });
    }
	handleClick(){
		const postName = this.refs.postName.value;
		const cateName = this.refs.cateName.value;
        const content = this.refs.textarea.value;
		$.ajax({
			url:"http://localhost:5000/admin/post/add",
			method:"POST",
			data:{ postName,cateName,content },
			success:function (date) {
				console.log(date);
			}
		})
	}
	render(){
        return (
            <div className = 'editor'>
			    <div className = 'add'>{'添加文章'}</div>
			    <div className = 'form'>
				    <div className = 'text'>
				    <p>文章名称：<input type = "text" ref = 'postName' placeholder = '请输入章名称' /></p>
					<p>文章分类：<input type = "text" ref = 'cateName' placeholder = '请输入文章分类' /></p>
					</div>
				    <textarea ref='textarea' />
				    <a onClick = {this.handleClick.bind(this)} className = 'submit'>{'提交'}</a>
				</div>
            </div>
        )
    }
}


render(
    <Add />,document.getElementById('app')
)
