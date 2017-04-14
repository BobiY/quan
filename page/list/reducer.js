/**
  Object对象的新方法在IE中不兼容 , Object.assign 在ie11 中不支持 可使用 Object.keys代替
*/

/**
   自定义Object.assign 方法
*/

// const _assign = ( obj1,obj2 ) => {
// 	let arrKeys = [];
//
// }


import { combineReducers } from 'redux';

/*===========================  reducer  =================================== */

/*===========================  获取文章列表  =================================== */

const allList = (state={loading:'',date:{user:{},date:[],totle:0}},action) => {
	switch(action.type){
		case "LOADList":
			return Object.assign({},state,{loading:"Loading..."});
		case "ListOK":
			return Object.assign({},state,{loading:"OK",date:{date:action.date.posts,user:action.date.user,totle:action.date.totle}});
	    default:
		    let data = state.date.date.length ? action.date :[];
		    return state;
	}
}


/*===========================  获取文章的具体信息  =================================== */

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

/*===========================  判断显示模式  =================================== */

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



/*===========================  删除文章  =================================== */

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

/*===========================  编辑文章  =================================== */

const editPostOne = (state={loading:"go",date:""},action) => {
	switch (action.type) {
		case 'GO':
           return Object.assign({},state,{loading:"go",date:{}});
	   case 'EDIT':
          return Object.assign({},state,{loading:"OK",date:action.date});
		default:
		    return state;

	}
}



/*===========================  将reducer暴露出去，构建state树  =================================== */

export default combineReducers({
	allList,getContent,modeW,deletePostOne,editPostOne
})
