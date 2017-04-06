import React,{ Component } from 'react';
import Header from '../../component/header.js';
import Article from '../../component/article.js';
import Classify from '../../component/classify.js';
import '../../dist/html/css/list.css';
import Loading from '../../dist/html/image/loading.gif';
export default class List extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
                <Header />
                <section>
                   {
                       this.props.list === 'Loading...' ?
                            <div className = 'loading'>
                                <img src = {Loading} />
                            </div>
                              :
                            <div className = 'article'>
                                <Article getContent = {this.props.getContents} />
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
        this.props.getContents();
    }
}
