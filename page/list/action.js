
//读取列表数据
export const allList = () => {
    return dispatch => {
		dispatch({type:"LOADList"});
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
		return $.ajax({url:`http://localhost:5000/list/${id}`}).then( (date) => {
			dispatch({type:"ContentOK",date});
		} )
	}
}

//判断应该显示列表还是内容详情

export const mode = (bool) => {
    console.log(bool);
    return { type :"MODE",bool }
}
