import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import firebase from 'firebase';

class NewPost extends Component {
    constructor(props){
        super(props);
        this.savePost = this.savePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            textPost: '',
            imagenPost: ''
        }
    }

    handleChange(e){
        this.setState({ textPost: e.target.value});
    }

    datePost () {

    }

    imagenPost(){
        
    }

    savePost () {
        if (this.state.textPost.length === 0 || /^\s+$/.test()) {
            alert('No has escrito nada');
          } else {
        firebase.database().ref('postReact').push();
        const postNew = firebase.database().ref('postReact').push();
        const keyPost = postNew.getKey();
        firebase.database().ref(`postReact/${keyPost}`).set({
            name: this.props.user.displayName,
            photo: this.props.user.photoURL,
//            date: this.state.datePost,
            textPost: this.state.textPost,
            keyPost: keyPost,
            likes: 0
            });
        // alert('Se guardo el mensaje');
        this.setState({textPost: ''})    
        }
    }

    render (){
        const userName = this.props.user.displayName;
        return (
            <div className="container">
                <Card className="mt-5 col-sm-1 col-md-7">
                <CardHeader><strong>{userName}</strong> Escribe tu comentario:</CardHeader>
                <CardBody>
                    <textarea name="textPost" className="col-12" value={this.state.textPost} onChange={this.handleChange}></textarea>
                    <Button className="ml-auto" color="info" onClick={this.savePost}>Publicar <i className="fas fa-arrow-circle-right"></i></Button>
                </CardBody>
                </Card>
            </div>     
        )
    }
}

export default NewPost;