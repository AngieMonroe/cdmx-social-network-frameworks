import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import firebase from 'firebase';
import imageUser from '../images/usuario.jpg';

//Componente que permitirá escribir nuevos post y guardarlos en firebase
class NewPost extends Component {
    constructor(props){
        super(props);
        this.savePost = this.savePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeImage = this.handleChangeImage(this);
        this.state = {
            textPost: '',
            imagePost: ''
        }
    }

    handleChange(e){
        this.setState({ textPost: e.target.value});
    }

    // handleChangeImage(e){
    //     this.setState({ imagePost: e.target.files[0]});
    //     console.log(e.target.files[0])
    // }


    savePost () {
        if (this.state.textPost.length === 0 || /^\s+$/.test()) {
            alert('No has escrito nada');
          } else {
              let photoUser;
              if(this.props.user.photoURL === null){
                  photoUser = imageUser;
              }else{
                  photoUser = this.props.user.photoURL;
              }
            // Al guardar la información en firebase  se envia las props, asi como el estado
            // resultado del nuevo mensaje escrito.
            firebase.database().ref('postReact').push();
            const postNew = firebase.database().ref('postReact').push();
            const keyPost = postNew.getKey();
            firebase.database().ref(`postReact/${keyPost}`).set({
                name: this.props.user.displayName,
                photo: photoUser,
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
            <section className="container-fluid">
                <Card className="mt-5 col-sm-12 col-md-7">
                <CardHeader><strong>{userName}</strong> Escribe tu comentario:</CardHeader>
                <CardBody>
                    <textarea name="textPost" className="col-12" value={this.state.textPost} onChange={this.handleChange}></textarea>
                    {/* <input type="file" value={this.state.imagePost} onChange={this.handleChangeImage}/> */}
                    <Button className="ml-auto" color="info" onClick={this.savePost}>Publicar <i className="fas fa-arrow-circle-right"></i></Button>
                </CardBody>
                </Card>
            </section>     
        )
    }
}

export default NewPost;