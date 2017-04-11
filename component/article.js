import React,{ Component } from 'react';
import '../dist/html/css/article.css';
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
	render(){
		let { content } = this.props;
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
				    <div dangerouslySetInnerHTML={{__html: `${content.content}`}}>
					</div>
				</div>
				<div className="post-permalink">
					{ this.props.mode === 'content' ? ( <a href="#" className="btn btn-default" onClick = {this.backHandle.bind(this)}>{'返回列表页'}</a>) : <a href="#" className="btn btn-default" onClick = {this.clickHandle.bind(this,this.props.id)}>{'阅读全文'}</a>
				    }
					{
						this.props.admin ? <a href="javascript:;" style = {{float:"right"}} onClick = {this.removeHandle.bind(this,this.props.id)}>{'删除此文章'}</a> : null
					}
				</div>
			</article>
		)
	}
}
