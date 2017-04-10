import React,{Component} from 'react';
import { render } from 'react-dom';
import Login from './login.js';
import Header from '../../component/user.js';

class User extends Component {
	constructor(props) {
		super();
		this.state = {
			title:""
		}
		this.setTitle = this.setTitle.bind(this);
	}
	setTitle(title){
			this.setState({
				title
			})
	}
	//componentShouldUpdate()
	render(){
		return (
			<div>
                <Header setTitle = {this.setTitle}/>
				<Login title = {this.state.title}/>
			</div>
		)
	}
}



render(<User />,document.getElementById('app'));
