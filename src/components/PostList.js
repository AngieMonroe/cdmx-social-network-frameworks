import React, { Component } from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import firebaseConf from '../config/firebaseConf';

class PostList extends Component {
     constructor(props){
         super(props);
         this.database = firebaseConf.database().ref().child('postReact'); 
         this.deletePost = this.deletePost.bind(this);
         this.editPost = this.editPost.bind(this);
         this.likePost = this.likePost.bind(this);
         this.dislikePost = this.dislikePost.bind(this);   
         this.state = {
             posts: []
         }
     }

     componentDidMount(){
         this.database.on('value', snap => {
             this.setState({
                 posts: snap.val()
             })
         })
     }

     deletePost (){

     }

     editPost() {

     }

     likePost() {

     }

     dislikePost() {

     }

    render() {
        console.log(this.state.posts)
        console.log(Object.keys(this.state.posts))
        const { post } = this.state;

        return (
            <div className="container">
                <Card className="mt-3 col-sm-1 col-md-9">
                    <CardHeader>
                    <img src="" width="30px" className="img-fluid z-depth-1 rounded-circle" alt="Imagen usuario"></img>
                    </CardHeader>
                    <CardBody>
                        <p name="textPost" className="col-12"></p>
                        <li className="list-inline-item pr-2 ml-auto"><a href="#" className="white-text" ><i className="far fa-trash-alt fa-xs icon"></i> Delete</a></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text" ><i className="far fa-edit fa-xs icon"> </i> Edit</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-up"></i>  Like</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-down icon"></i>  Dislike</a></li>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

 export default PostList;