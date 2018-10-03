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

    // componentDidMount(){
    //     this.database.orderByChild('keyPost').on('value', snapshot => {             
    //        const likes = [];
    //        snapshot.forEach(element => {
    //            const like = element.val()
    //            like.push(likes);
    //        })
    //        this.setState({ like: likes});
    //     })
    // }

    like () {
        console.log('like')
        this.setState(function(prevState){
            return {
                like: prevState.like + 1
            }
        })
    };

    dislike(){
        console.log('dislike')
        this.setState(function(prevState){
            if(prevState.like >= 1){
                return {
                    like: prevState.like - 1
                }
            }
        })
    };

    render(){
        return (
            <div className="list-inline-item">
                <li className="list-inline-item"><a href="#" className="white-text" onClick={() => this.like()} name="like"><i className="far fa-thumbs-up"></i>  Like </a> {this.state.like}</li>
                <li className="list-inline-item"><a href="#" className="white-text" onClick={() => this.dislike()} name="dislike"><i className="far fa-thumbs-down icon"></i>  Dislike</a></li>
            </div>
        )
    }
}

export default Likes;