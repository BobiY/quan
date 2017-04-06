import React,{ Component } from 'react';
import '../dist/html/css/classify.css';

export default class Classify extends Component {
	constructor(props) {
		super();
	}
    render(){
		return (
			<div>
				<div className="widget">
					<h4 className="title">社区</h4>
					<div className="content community">
						<p>QQ群：462694081</p>
						<p><a href="#" title="Laravel中文网问答社区" target="_blank" ><i className="fa fa-comments"></i> 问答社区</a></p>
					</div>
				</div>
				<div className="widget">
					<h4 className="title">标签云</h4>
					<div className="content tag-cloud">
						<a href="#">Laravel 5.2</a>
						<a href="#">Spark</a>
						<a href="#">镜像</a>
						<a href="#">新版本发布</a>
						<a href="#">LTS</a>
						<a href="#">微框架</a>
						<a href="#">Lumen</a>
						<a href="#">命名空间</a>
						<a href="#">Laravel4</a>
						<a href="#">Whoops</a>
						<a href="#">Event</a>
						<a href="#">升级</a>
						<a href="#">laravle5</a>
						<a href = "#">错误页</a>
						<a href = "#">Laravel 5</a>
						<a href = "#">Artisan</a>
						<a href = "#">Laravel 5.1</a>
						<a href = "#">Lravel</a>
						<a href = "#">...</a>
					</div>
				</div>
			</div>
		)
	}
}
