import React,{Component} from 'react';
import { render } from 'react-dom';
import Login from './login.js';
import Header from '../../component/user.js';

class User extends Component {
	constructor(props) {
		super();
	}
	render(){
		return (
			<div>
                <Header />
				<Login />
			</div>
		)
	}
}



render(<User />,document.getElementById('app'));
