import React,{ Component } from 'react';
import '../css/header.css';

export default class Header extends Component{
    constructor(props){
      super();
      this.state = {
          user:{name:"44444"}
      }
    }
    handleClick(str){
        this.props.getContent(str)
    }
    render(){
        let { user } = this.props;
        return(
            <nav>
                <h2 className = 'left'>React-Blog</h2>
                <ul className = 'right'>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'react') }>react</a></li>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'redux') }>redux</a></li>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'node') }>node</a></li>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'express') }>express</a></li>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'css3') }>CSS3</a></li>
                    <li><a href = "javascript:;" onClick = { this.handleClick.bind(this,'html5') }>HTML5</a></li>
                    {
                        user ?
                            <li>欢迎 {user.name}<a href = "/users/logout" >[注销]</a></li> :
                            <li><a href = '/users/login' >{'登陆'}</a></li>
                    }
                    {
                        user ?
                            <li><a href = "/admin/post/add" >{'添加文章'}</a></li> :
                            null
                    }
                </ul>
            </nav>
        )
    }
}
