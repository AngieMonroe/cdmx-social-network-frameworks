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
        console.log(keyPost)
        if(window.confirm('¿Quieres eliminar el post?')){
            this.database.child(keyPost).remove();
        } else {
            console.log("Todo sigue igual")
        }
     }

     editPost(keyPost) {
         console.log(keyPost);
         
        // document.getElementById(keyPost).readOnly = false;
        // let buttonUpdate = document.getElementById('editar' + keyPost);
        // console.log(buttonUpdate);
        // buttonUpdate.innerHTML = 'Guardar';
        // buttonUpdate.onclick = function() {
        //   let ref = database.ref('post').child(keyPost);
        //   let post = document.getElementById(keyPost).value;
        //   return ref.update({
        //     post: post
        //   })
        //     .then(function() {
        //       buttonUpdate.innerHTML = 'Editar';
        //       document.getElementById(keyPost).readOnly = true;
     }


    render() {
        console.log(this.state.posts)
        return (
            <fragment className="container">
            {this.state.posts.map(post => 
                <Card className="mt-3 col-sm-1 col-md-9" key={post.keyPost}>
                    <CardHeader>
                    <img src={post.photo} width="30px" className="img-fluid z-depth-1 rounded-circle mr-3" alt="Imagen usuario"></img> {post.name} dice:
                    </CardHeader>
                    <CardBody>
                        <p name="textPost" className="col-12">{post.textPost}</p>
                        <li className="list-inline-item pr-2 ml-auto"><a href="#" className="white-text" onClick={() => this.deletePost(post.keyPost)}><i className="far fa-trash-alt fa-xs icon"></i> Delete</a></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text" onClick={() => this.editPost(post.keyPost)}><i className="far fa-edit fa-xs icon"> </i> Edit</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-up"></i> {post.likes}  Like</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="far fa-thumbs-down icon"></i>  Dislike</a></li>
                    </CardBody>
                </Card>
                )}
            </fragment>
        )
    }
}

 export default PostList;