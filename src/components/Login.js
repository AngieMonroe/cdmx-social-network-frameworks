import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseConf from '../config/firebaseConf';
import logo from './logodeafriend2.png';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import './Login.css';

// En este componente se agrupan los distintos métodos para inciar sesión 
class Login extends Component {
    constructor (props){
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    login(e) {
        e.preventDefault();
        firebaseConf.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
        })
        .catch((error) => {
            alert('Escribe correo y contraseña validos');
        });
    }

    // Se guarda nombre del registro de usuario en el perfile de firebase para ser utilizado más adelante
    signup(e){
        e.preventDefault();
        firebaseConf.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            firebase.auth().currentUser.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(() => {
            alert('Ingresa información valida en los campos')
        })
    }

    loginGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseConf.auth().signInWithRedirect(provider)
        .then(() => {
        })
        .catch((error) => {
        console.log('Error en google')
    });
    }

    loginFacebook(){
        const provider = new firebase.auth.FacebookAuthProvider();
        firebaseConf.auth().signInWithRedirect(provider).then(() => {
        }).catch((error) => {
        console.log('Error en facebook')
    });
    }

    handleChange(e){
        console.log(e)
        this.setState({ [e.target.name]: e.target.value});
    }
    
    render (){
        return (
            <section className="container-fluid">
                <Row className="show-grid row justify-content-center">
                <Col sm={1} md={8} >
                    <div className="text-center">
                    <img src={logo} className="logo img-fluid" alt="logo deafriend" />
                    </div>

                    <Form>
                    <FormGroup>
                            <Input placeholder="Escribe tu nombre" value={this.state.name} onChange={this.handleChange} type="text" name="name" />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Escribe tu email" value={this.state.email} onChange={this.handleChange} type="email" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Escribe tu contraseña" value={this.state.password} onChange={this.handleChange} type="password" name="password" />
                        </FormGroup>
                        <Button className="col align-self-start mb-2 btn colorBtn2" size="md" onClick={this.login} >Entrar</Button>
                        <Button className="col align-self-end btn btn-light"  size="md" onClick={this.signup} >Registrarte</Button>
                        </Form>
                </Col>
                </Row>
                <Row className="row justify-content-md-center mt-3">
                    <Col sm={1} md={8} >
                    <Button className="btn-google btn-social btn-block" onClick={this.loginGoogle}> 
                    <i className="fab fa-google"></i> Ingresa con Google</Button>{' '}
                    <Button className="btn-facebook btn-social btn-block" onClick={this.loginFacebook}>
                    <i className="fab fa-facebook"></i> Ingresa con Facebook</Button>{' '}
                    </Col>
                </Row>
            </section>   
        )
    }
}

export default Login;