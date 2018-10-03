import React, { Component } from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import firebaseConf from '../config/firebaseConf';
import Likes from './Likes';

class PostList extends Component {
     constructor(props){
         super(props);
         this.database = firebaseConf.database().ref('postReact'); 
         this.handleChange = this.handleChange.bind(this);
         this.deletePost = this.deletePost.bind(this);
         this.editPost = this.editPost.bind(this);  
         this.likePost = this.likePost.bind(this);
         this.state = {
            posts : [],
            postEdit : '',
         };
     }

     handleChange(e){
        this.setState({ [e.target.name] : e.target.value});
    }

     componentDidMount(){
         this.database.orderByChild('keyPost').on('value', snapshot => {             
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
        }
     }

     editPost(keyPost) {
         this.database.child(keyPost).update({
            textPost : this.state.postEdit
         })
     }
    
     likePost(keyPost){
         console.log(keyPost);
         this.database.child(keyPost).update({
             likes: 0
         })
     }


    render() {
        return (
            <section className="container">
            {this.state.posts.map(post => 
                <Card className="mt-3 col-sm-1 col-md-9" key={post.keyPost}>
                    <CardHeader>
                    <img src={post.photo} width="30px" className="img-fluid z-depth-1 rounded-circle mr-3" alt="Imagen usuario"></img> {post.name} dice:
                    </CardHeader>
                    <CardBody>
                        <p name="textPost" className="col-12">{post.textPost} </p>
                        <li className="list-inline-item pr-2 ml-auto"><a href="#" className="white-text" onClick={() => this.deletePost(post.keyPost)}><i className="far fa-trash-alt fa-xs icon"></i> Delete</a></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text" name="postEdit" data-toggle="modal" data-target={"#" + post.keyPost}><i className="far fa-edit fa-xs icon"> </i> Edit</a></li>
                        <Likes />

                        <div className="modal fade" id={post.keyPost} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edita tu mensaje</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> <textarea contenteditable="true" className="col-12" name="postEdit" value={this.state.postEdit} onChange={this.handleChange}> {post.textPost} </textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.editPost(post.keyPost)}>Guardar cambios</button>
                            </div>
                            </div>
                        </div>
                        </div>
              </CardBody>
                </Card>
                )}
            </section>
        )
    }
}

 export default PostList;