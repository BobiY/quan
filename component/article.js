import React,{ Component } from 'react';
import '../dist/html/css/article.css';


export default class Article extends Component {
	constructor(props) {
        super();
	}

    clickHandle(id){

        this.props.getContent(id);
	}

	render(){
		return (
			<article className = 'post'>
				<div className = 'post-head'>
					<h1 className = 'post-title'>{'我是标题一'}</h1>
					<div className = 'post-meta'>
					    {'作者：'}
						<span className = 'author'>{'小白'}</span>
						{"·"}
						<span className = 'time'>{"2017年4月5日"}</span>
					</div>
				</div>
				<div className="featured-media">
					<a href="#"><img src="http://image.golaravel.com/f/48/7a406073b512ef16a891127824c7b.jpg" alt="Laravel 5.4 版本正式发布" /></a>
				</div>
				<div className="post-content">
					<p>{`Laravel 的上一个 LTS（长期支持）版本是 Laravel 5.1，发布于 2015 年 6 月，按照对 LTS 版本的约定，两年的 bug 修复支持到今年中旬就结束了，所以今年中旬必然要出一个 LTS 后继版本，就是 Laravel 5.5。
今天 Laravel 官方在 twitter 上发布消息，Laravel 5.5 版本预计在今年的 7 、8 月份就会发布，遵循约定，Laravel 5.5 LTS 版本同样包含两年的 bug 修复以及三年的安全修复支持。`}</p>
				</div>
				<div className="post-permalink">
					<a href="#" className="btn btn-default" onClick = {this.clickHandle.bind(this)}>{'阅读全文'}</a>
				</div>
			</article>
		)
	}
}
