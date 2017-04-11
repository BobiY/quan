import React,{ Component } from 'react';
import '../dist/html/css/header.css';

export default class Header extends Component{
    constructor(props){
      super();
    }

    render(){
        return(
            <nav>
                <h2 className = 'left'>React-Blog</h2>
                <ul className = 'right'>
                    <li><a href = "#" >react</a></li>
                    <li><a href = "#" >redux</a></li>
                    <li><a href = "#" >node</a></li>
                    <li><a href = "#" >express</a></li>
                    <li><a href = "#" >CSS3</a></li>
                    <li><a href = "#" >HTML5</a></li>
                    <li><a href = "/users/login" >登录</a></li>
                </ul>
            </nav>
        )
    }
}
