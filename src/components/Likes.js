import React, { Component } from 'react';
import firebaseConf from '../config/firebaseConf';

class Likes extends Component{
    constructor(props){
        super(props);
        this.database = firebaseConf.database().ref('postReact'); 
    }
    
    like(keyPost, like) {
        const likes = like + 1
        this.database.child(keyPost).update({
              likes : likes
           })
    };

    dislike(keyPost, like) {
        const dislike = like -1
        this.database.child(keyPost).update({
              likes : dislike
           })
    };

    render(){
        const keyPost = this.props.keyPost
        const like = this.props.likes
        return (
            <div className="list-inline-item">
                <li className="list-inline-item">
                    <a href="#" className="white-text ml-2 mr-2" onClick={() => this.like(keyPost, like)} name="like">
                        <i className="far fa-thumbs-up"></i>   </a> </li>
                <li className="list-inline-item">
                    <p className="mr-auto text-warning"> {like}</p>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="white-text ml-2 mr-2" onClick={() => this.dislike(keyPost, like)} name="dislike">
                        <i className="far fa-thumbs-down icon"></i>  </a></li>
            </div>
        
        )
    }
}

export default Likes;