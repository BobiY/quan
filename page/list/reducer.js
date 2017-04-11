import { combineReducers } from 'redux';

//获取文章列表
const allList = (state={loading:'',date:{user:{},date:[]}},action) => {
	switch(action.type){
		case "LOADList":
			return Object.assign({},state,{loading:"Loading..."});
		case "ListOK":
			return Object.assign({},state,{loading:"OK",date:{date:action.date.posts,user:action.date.user}});
	    default:
		    let data = state.date.date.length ? action.date :[];
		    return state;
	}
}

//获取文章的具体信息
const getContent = (state={loading:'Loading...',data:{}},action) =>{
	switch (action.type) {
		case "LOADContent":
            return Object.assign({},state,{loading:"Loading...",date:{}});
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

const deletePostOne = (state={loading:"begin",date:""},action) => {
	switch (action.type) {
		case 'BEGIN':
           return Object.assign({},state,{loading:"begin",date:{}});
	   case 'Ok':
          return Object.assign({},state,{loading:"ok",date:action.date});
		default:
		    return state;

	}
}



export default combineReducers({
	allList,getContent,modeW,deletePostOne
})
