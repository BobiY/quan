import React,{ Component } from 'react';
import Header from '../../component/header.js';
import Article from '../../component/article.js';
import Classify from '../../component/classify.js';
import '../../dist/html/css/list.css';
import Loading from '../../dist/html/image/loading.gif';
export default class List extends Component{
    constructor(props){
        super();
        this.state = {
            mode:'list'
        }
    }

    articleList(){
        let data,name
        if( this.props.mode === 'list' ){
            data = this.props.list.date.date;
            name = this.props.list.date.user;
            if( data.length  ){
                if(name){
                    const admin = name.name;
                }
                data = data.map( (val,index) => {
                     return <Article key = {val._id}
                                     getContent = {this.props.getContents}
                                     admin = { "555" }
                                     id = { val._id }
                                     content = {val}
                                     qieMode = {this.props.modeM}
                                     deletePost = {this.props.deletePost}
                                     getList = { this.props.getList }
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
                       />)
            }
        }
        return data;
    }
    render(){
        return (
            <div>
                <Header />
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
            </div>
        )
    }
    componentDidMount(){
        this.props.getList();
        //this.props.getContents();
    }
}
