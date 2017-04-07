import React,{ Component } from 'react';
import '../../dist/html/css/login.css';

export default class Login extends Component{
	constructor(props) {
        super();
	}
	render(){
		return (
			<div className = "login" >
                <div className = 'wrapper'>
				    <div className = 'top'>
                        <div className = 'left'>
                            <h3>{'用户登录'}</h3>
							<p><input className = 'user' placeholder= '邮箱 / 用户名' ref='user' /></p>
							<p><input
							className = 'user' placeholder= '密码' ref='password' /></p>
							<p><a className = 'btn'>{'登录'}</a></p>
						</div>
						<div className = 'right'>
                            {'89'}
						</div>
					</div>
                    <div className = 'bottom'></div>
				</div>
			</div>
		)
	}
}
