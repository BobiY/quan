import React,{ Component } from 'react';
import '../dist/html/css/userH.css';
import Img from '../dist/html/image/logo.jpg';
export default class UserH extends Component {
	constructor(props) {
		super();
	}
	handleClick(title){
		const { setTitle } = this.props;
		setTitle(title);
	}
	render(){
		//const { setTitle } = this.props;
		return(
			<div className = 'header'>
				<nav className = 'continer'>
                    <div className = 'title'>
                        <h1>{'React-Blog'}</h1>
					</div>
					<div className = 'img'>
                        <img src= {Img}/>
						<img src= {Img}/>
						<img src= {Img}/>
						<img src= {Img}/>
						<img src= {Img}/>
						<img src= {Img}/>
					</div>
					<div className= 'btnList'>
                        <a className="register" onClick = {this.handleClick.bind(this,'注册')}>注册</a>
                        <a className="register logins" onClick = {this.handleClick.bind(this,'登录')}>登录</a>
					</div>
				</nav>
			</div>
		)
	}
}
