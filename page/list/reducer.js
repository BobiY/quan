import { combineReducers } from 'redux';

//获取文章列表
const allList = (state={loading:'',data:[]},action) => {
	switch(action.type){
		case "LOADList":
			return Object.assign({},state,{loading:"Loading..."});
		case "ListOK":
			return Object.assign({},state,{loading:"OK",data:action.date});
	    default:
		    let data = state.data.length ? action.data :[];
		    return state;
	}
}

//获取文章的具体信息
const getContent = (state={loading:'Loading...',data:{}},action) =>{
	switch (action.type) {
		case "LOADContent":
            return Object.assign({},state,{loading:"Loading..."});
		case "ContentOK":
		    return Object.assign({},state,{loading:"ok",date:action.date});
		default:
		    return state;

	}
}

//判断显示模式
const modeW = (state='list',action) => {
	switch (action.type) {
		case 'MODE':
		    //console.log(action.bool);
            state = action.bool ? 'list' : 'content'
			return state;
		default:
		    return state;

	}
}


export default combineReducers({
	allList,getContent,modeW
})
