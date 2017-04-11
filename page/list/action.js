
//读取列表数据
export const allList = () => {
    return dispatch => {
		dispatch({type:"LOADList"});
        //url:"http://yaoreact.duapp.com/list"
		return $.ajax({url:"http://localhost:5000/list"}).then( (date) => {
			dispatch({type:"ListOK",date});
		} )
	}
};

//点击获取文章的详细信息
export const getContent = (id) =>{
    //console.log(id)
	return dispatch => {
		dispatch({type:"LOADContent"});
        //http://yaoreact.duapp.com/list/${id}
		return $.ajax({url:`http://localhost:5000/list/${id}`}).then( (date) => {
			dispatch({type:"ContentOK",date});
		} )
	}
}

//删除文章
export const deletePost = (id) => {
    return dispatch => {
        dispatch({type:"BEGIN"});
        return $.ajax({url:`http://localhost:5000/list/delete/${id}`}).then( (date) => {
            dispatch({type:"OK",date})
        } )
    }
}




//判断应该显示列表还是内容详情

export const mode = (bool) => {
    console.log(bool);
    return { type :"MODE",bool }
}
