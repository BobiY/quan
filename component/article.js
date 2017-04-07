import React,{ Component } from 'react';
import '../dist/html/css/article.css';


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
						<span className = 'time'>{content.date}</span>
					</div>
				</div>
				<div className="featured-media">
					<a href="#"><img src={content.img} alt="Laravel 5.4 版本正式发布" /></a>
				</div>
				<div className="post-content">
					<p>{content.content}</p>
				</div>
				<div className="post-permalink">
					{ this.props.mode === 'content' ? ( <a href="#" className="btn btn-default" onClick = {this.backHandle.bind(this)}>{'返回列表页'}</a>) : <a href="#" className="btn btn-default" onClick = {this.clickHandle.bind(this,this.props.id)}>{'阅读全文'}</a> }
				</div>
			</article>
		)
	}
}
