import React,{ Component } from 'react';
import '../dist/html/css/userH.css';
import Img from '../dist/html/image/logo.jpg';
export default class UserH extends Component {
	constructor(props) {
		super();
	}
	render(){
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
                        <a className="register" href="#">注册</a>
                        <a className="register logins"href="#">登录</a>
					</div>
				</nav>
			</div>
		)
	}
}
