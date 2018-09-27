import React, { Component } from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import firebaseConf from '../config/firebaseConf';

class PostList extends Component {
     constructor(props){
         super(props);
         this.database = firebaseConf.database().ref('postReact'); 
         this.deletePost = this.deletePost.bind(this);
         this.editPost = this.editPost.bind(this);  
         this.state = {
            posts : [],
         };
     }

     componentDidMount(){
         this.database.on('value', snapshot => {             
            const posts = [];
            snapshot.forEach(element => {
                const dataPost = element.val()
                posts.push(dataPost);
            })
            this.setState({ posts: posts});
         })
     }

     deletePost(keyPost) {
         if (window.    confirm('Quieres eliminar este post')){
         this.database.ref('postReact').child(keyPost).remove();
         } else {
             return false;
         }
     }

     editPost() {

     }


    render() {
        console.log(this.state.posts)
        return (
            <div className="container">
            {this.state.posts.map(post => 
                <Card className="mt-3 col-sm-1 col-md-9" key={post.keyPost}>
                    <CardHeader>
                    <img src={post.photo} width="30px" className="img-fluid z-depth-1 rounded-circle mr-3" alt="Imagen usuario"></img> {post.name} dice:
                    </CardHeader>
                    <CardBody>
                        <p name="textPost" className="col-12">{post.textPost}</p>
                        <li className="list-inline-item pr-2 ml-auto"><a href="#" className="white-text" onClick={this.deletePost}><i className="far fa-trash-alt fa-xs icon"></i> Delete</a></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text" ><i className="far fa-edit fa-xs icon"> </i> Edit</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-up"></i> {post.likes}  Like</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-down icon"></i>  Dislike</a></li>
                    </CardBody>
                </Card>
                )}
            </div>
        )
    }
}

 export default PostList;