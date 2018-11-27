import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import firebase from 'firebase';
import imageUser from '../images/usuario.jpg';
import firebaseConf from '../config/firebaseConf';
import './NewPost.css';


//Componente que permitirá escribir nuevos post y guardarlos en firebase
class NewPost extends Component {
    constructor(props){
        super(props);
        this.savePost = this.savePost.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            textPost: '',
            image: '',
            url:''
        }
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    saveImage(){
        console.log(this.state.url.name)
        const databaseImage = firebaseConf.storage().ref(`images/${this.state.url.name}`);
        const newImage = databaseImage.put(this.state.url);
        newImage.on('state_changed', snapshot => {console.log('Uploaded a blob or file!')},
        error => { console.log('error'); },
        () => {
        firebaseConf.storage().ref('images').child(this.state.url.name).getDownloadURL().then(image => {
            console.log(image)
            this.setState({ image });
        })
    })
    }

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
                likes: 0,
                image: this.state.image
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
                    <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" name="image" onChange={event => this.setState ({url: event.target.files[0]})}/>
                        <label className="custom-file-label">Selecciona una imagen</label>
                    </div>
                    </div>
                    {/* <input type="file" name="image" onChange={event => this.setState ({url: event.target.files[0]})}/> */}
                    <Button className="ml-auto mr-2 colorBtn2" onClick={this.saveImage}>Adjuntar</Button>
                    <Button className="ml-auto colorBtn"  onClick={this.savePost}>Publicar <i className="fas fa-arrow-circle-right"></i></Button>
                </CardBody>
                </Card>
            </section>     
        )
    }
}

export default NewPost;