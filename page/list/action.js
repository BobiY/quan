/*===========================  action url  =================================== */


/*===========================  阿里云打包地址  =================================== */

const aliUrl = {
    //获得列表数据
    allList:'http://119.23.79.243:5000/list',
    //获得列表中某个文章数据
    getContent:'http://119.23.79.243:5000/list',
    //删除文章
    deletePost:'http://119.23.79.243:5000/list/delete',
    //编辑文章
    editPost:'http://119.23.79.243:5000/admin/post/edit'
}


/*===========================  本地开发地址  =================================== */

const localUrl = {
    //获得列表数据
    allList:'http://localhost:5000/list',
    //获得列表中某个文章数据
    getContent:'http://localhost:5000/list',
    //删除文章
    deletePost:'http://localhost:5000/list/delete',
    //编辑文章
    editPost:'http://localhost:5000/admin/post/edit'
}


/*===========================  action  =================================== */


/*===========================  读取列表数据  =================================== */

export const allList = (cate) => {
    return dispatch => {
		dispatch({type:"LOADList"});
        //url:"http://yaoreact.duapp.com/list"
        console.log(cate);
        //let url = cate ? `http://119.23.79.243:5000/list/cate/${cate}`:'http://119.23.79.243:5000/list';
        let url = cate ? `${localUrl.allList}/cate/${cate}`:localUrl.allList;
        console.log(url);
		return $.ajax({url}).then( (date) => {
			dispatch({type:"ListOK",date});
		} )
	}
};


/*===========================  点击获取文章的详细信息数据  =================================== */

export const getContent = (id) =>{
    //console.log(id)
	return dispatch => {
		dispatch({type:"LOADContent"});
        //http://yaoreact.duapp.com/list/${id}
        //`http://119.23.79.243:5000/list/${id}`
		return $.ajax({url:`${localUrl.getContent}/${id}`}).then( (date) => {
			dispatch({type:"ContentOK",date});
		} )
	}
}


/*===========================  删除文章数据  =================================== */

export const deletePost = (id) => {
    return dispatch => {
        dispatch({type:"BEGIN"});
        //`http://119.23.79.243:5000/list/delete/${id}`
        return $.ajax({url:`${localUrl.deletePost}/${id}`}).then( (date) => {
            dispatch({type:"OK",date})
        } )
    }
}


/*===========================  编辑文章数据  =================================== */

export const editPost = (id) => {
    return dispatch => {
        dispatch({type:"GO"});
        //`http://119.23.79.243:5000/list/delete/${id}`
        return $.ajax({url:`${localUrl.editPost}/${id}`}).then( (date) => {
            dispatch({type:"EDIT",date})
        } )
    }
}


/*===========================  判断应该显示列表还是内容详情  =================================== */

export const mode = (bool) => {
    return { type :"MODE",bool }
}
