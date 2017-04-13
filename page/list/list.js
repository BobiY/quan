import React,{ Component } from 'react';
import Header from '../../component/header.js';
import Article from '../../component/article.js';
import Classify from '../../component/classify.js';
import '../../css/list.css';
import Loading from '../../dist/html/image/loading.gif';
import Add from '../addPost/addpost'
export default class List extends Component{
    constructor(props){
        super();
        this.state = {
            mode:'list',
            show:""
        }
    }

    articleList(){
        let data,name = this.props.list.date.user;
        if( this.props.mode === 'list' ){
            data = this.props.list.date.date;
            console.log(name);
            if( data.length  ){
                if(name){
                    const admin = name.name;
                }
                data = data.map( (val,index) => {
                     return <Article key = {val._id}
                                     getContent = {this.props.getContents}
                                     admin = { name }
                                     id = { val._id }
                                     content = {val}
                                     qieMode = {this.props.modeM}
                                     deletePost = {this.props.deletePost}
                                     getList = { this.props.getList }
                                     mode = {this.props.mode}
                            />
                } )
            }
        } else {
            data = this.props.content.date;
            const loading = this.props.content.loading;
            if(loading === 'Loading...'){
                data = (<div className = 'loading'>
                    <img src = {Loading} />
                </div>)
            } else {
                data = (<Article getContent = {this.props.getContents}
                                content = { data }
                                qieMode = {this.props.modeM}
                                mode = {this.props.mode}
                                editPost = {this.props.edit}
                                admin = { name }
                       />)
            }
        }
        return data;
    }
    render(){
        let { user } = this.props.list.date;
        return (
            <div>
                <Header user = { user }
                        getContent = { this.props.getList }
                />
                <section>
                   {
                       this.props.list.loading === 'Loading...'  ?
                            <div className = 'loading'>
                                <img src = {Loading} />
                            </div>
                              :
                            <div className = 'article'>
                                { this.articleList() }
                            </div>
                    }
                    <div className = 'singed'>
                        <Classify />
                    </div>
                </section>
                {
                    this.props.editContent.loading === "OK" ?
                        <div className = 'editContent'>
                           <div className = 'warpEdit'>
                               <Add  date = {this.props.editContent.date}></Add>
                           </div>
                           <div className = "mask"></div>
                        </div>
                                :
                     null
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getList();
        //this.props.getContents();
    }
}
