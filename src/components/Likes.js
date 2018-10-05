import React, { Component } from 'react';
import firebaseConf from '../config/firebaseConf';

class Likes extends Component{
    constructor(props){
        super(props);
        this.database = firebaseConf.database().ref('postReact'); 
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.state = {
            like: 0
        }
    }

    like () {
        this.setState(function(prevState){
            return {
                like: prevState.like + 1
            }
        })
    };

    dislike(){
        this.setState(function(prevState){
            if(prevState.like >= 1){
                return {like: prevState.like - 1}
            }
        })
    };

    render(){
        return (
            <div className="list-inline-item">
                <li className="list-inline-item">
                    <a href="#" className="white-text ml-2 mr-2" onClick={() => this.like()} name="like">
                        <i className="far fa-thumbs-up"></i>   </a> </li>
                <li className="list-inline-item">
                    <a href="#" className="white-text ml-2 mr-2" onClick={() => this.dislike()} name="dislike">
                        <i className="far fa-thumbs-down icon"></i>  </a></li>
                <li className="list-inline-item">
                    <p className="mr-auto text-warning"> {this.state.like}</p>
                </li>
            </div>
        
        )
    }
}

export default Likes;