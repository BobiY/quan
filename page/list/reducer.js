import { combineReducers } from 'redux';

//获取文章列表
const allList = (state={},action) => {
	switch(action.type){
		case "LOADList":
			return Object.assign({},state,{loading:"Loading...",mode:"list"});
		case "ListOK":
			return Object.assign({},state,{loading:"Loading...",data:action.date});
	    default:
		    return state
	}
}

//获取文章的具体信息
const getContent = (state={},action) =>{
	switch (action.type) {
		case "LOADContent":
            return Object.assign({},state,{loading:"Loading...",mode:"content"});
		case "ContentOK":
		    return Object.assign({},state,{loading:"ok",date:action.date});
		default:
		    return state;

	}
}


export default combineReducers({
	allList,getContent
})
