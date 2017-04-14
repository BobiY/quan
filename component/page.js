/**
   分页器组件
*/


import React,{ Component } from 'react';
import '../css/page.css';


export default class Page extends Component {
	constructor(props){
		super();
		this.state = {
			page:1
		}
	}
	handleClick(arror){
		const num = this.state.page;
		const totlePages = this.props.totle;
		console.log(num);
		console.log(totlePages);
		if( arror === 'add' && (1 <= num && num < totlePages) ){
			this.props.qiePage(num+1);
			this.setState({
				page:num + 1
			})
		}
		if ( arror === 'dec' && ( 1 < num && num <= totlePages ) ){
			this.props.qiePage(num-1);
			this.setState({
				page:num - 1
			})
		}
	}
	render(){
		return (
			<div className = 'page'>
                <ul>
					 <li onClick = {this.handleClick.bind(this,'dec')} className = {this.state.page === 1 ? 'backGry' : ''}>{' < '}</li>
					 <li className = 'center'>第<span className = 'now'>{this.state.page}</span>页/共<span className = 'totle'>{this.props.totle}</span>页</li>
				     <li onClick = {this.handleClick.bind(this,'add')} className = {this.state.page === this.props.totle ? 'backGry' : ''}>{' > '}</li>
				</ul>
			</div>
		)
	}
}
