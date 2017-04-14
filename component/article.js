/**
   文章组件
*/

import React,{ Component } from 'react';
import '../css/article.css';
import moment from 'moment';

export default class Article extends Component {
	constructor(props) {
        super();
		this.mode = true;
	}

    clickHandle(id){
		this.mode = !this.mode;
		this.props.qieMode(this.mode);
        this.props.getContent(id);
	}
	backHandle(){
		this.props.qieMode(this.mode);
	}
    removeHandle(id){
		this.props.deletePost(id);
		this.props.getList();
	}
	editHandle(id){
		console.log(id);
		this.props.editPost(id)
	}
	/*================================ 过滤html标签 ===================================*/
	delHtmlTag(str){
        return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
    }

	/*================================ 处理文章在列表页显示的内容 ===================================*/
    showInfo(str){
		const arr = str.split(this.delHtmlTag(str)[119]);
	    const string = this.delHtmlTag(str)[119];
	    let number = 0;
	    let onOff = true;
		let str1 = '';
		let str2 = '';
		const _ = this;
	   arr.forEach(function (val,index) {
		   	if(number >= 120 && onOff){
		   		onOff = false;
		   		str2 = arr.slice(0,index).join(string);
                //console.log(str2);
		   	} else {
				str1 = `${_.delHtmlTag(val)}${_.delHtmlTag(str)[119]}`;
		   		number += str1.length;
		   	}
	   })
	   //console.log(str2.length);
	   return str2;
	}
	render(){
		let { content } = this.props;
		const contentStr = this.delHtmlTag(content.content);
		const contents = contentStr.length > 120 && this.props.mode === 'list' ? `${this.showInfo(content.content)}...` : content.content ;
		return (
			<article className = 'post'>
				<div className = 'post-head'>
					<h1 className = 'post-title'>{content.title}</h1>
					<div className = 'post-meta'>
					    {'作者：'}
						<span className = 'author'>{content.author}</span>
						{"·"}
						<span className = 'time'>{moment(content.date).format("YYYY-MM-DD HH:mm:ss")}</span>
					</div>
				</div>
				<div className="post-content">
				    <div dangerouslySetInnerHTML={{__html: `${contents}`}}>
					</div>
				</div>
				<div className="post-permalink">
					{ this.props.mode === 'content' ? ( <a href="#" className="btn btn-default" onClick = {this.backHandle.bind(this)}>{'返回列表页'}</a>) : <a href="#" className="btn btn-default" onClick = {this.clickHandle.bind(this,this.props.id)}>{'阅读全文'}</a>
				    }
					{
						this.props.mode === 'list' && this.props.admin ? <a href="javascript:;" style = {{float:"right"}} onClick = {this.removeHandle.bind(this,this.props.id)}>{'删除此文章'}</a> : null
					}
					{
						this.props.mode === 'content' && this.props.admin ? <a href='javascript:;' style = {{float:"right"}} onClick = {this.editHandle.bind(this,content._id)}>{'编辑此文章'}</a> : null
					}
				</div>
			</article>
		)
	}
}
