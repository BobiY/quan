import { render } from 'react-dom';
import React,{ Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider,connect } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer.js';
import { allList,getContent,mode,deletePost,editPost } from './action.js'
import List from './list.js';
const store = createStore(
	reducer,
	applyMiddleware( thunk,logger )
);


const mapStateToProps = state =>{
	return {
		list:state.allList,
		content:state.getContent,
		mode:state.modeW,
		editContent:state.editPostOne
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		getList:(str) => dispatch(allList(str)),
		getContents:(id) => dispatch(getContent(id)),
		modeM:(bool) => dispatch(mode(bool)),
		deletePost:(id) => dispatch(deletePost(id)),
		edit:(id) => dispatch(editPost(id))
	}
}




const Lists = connect(mapStateToProps,mapDispatchToProps)(List)

render(
	<Provider store = { store }>
	    <Lists />
	</Provider>
	,document.getElementById('app'));
