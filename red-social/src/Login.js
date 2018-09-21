import React, { Component } from 'react';
import firebase from 'firebase';
import fire from './config/fire'
import logo from './logodeafriend2.png'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor (props){
        console.log(props)
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((fun) => {
        }).catch((error) => {
            console.log('Error al ingresar');
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((fun) =>{
        }).catch((error)=>{
            console.log('Error al registrarse')
        })
    }

    google(e){
        const provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then((fun) => {
        }).catch((error) => {
        console.log('Error en google')
    });
    }

    facebook(e){
        const provider = new firebase.auth.FacebookAuthProvider();
        fire.auth().signInWithPopup(provider).then((fun) => {
        }).catch((error) => {
        console.log('Error en facebook')
    });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    
    render (){
        return (
            <section className="container-fluid">
                <Row className="show-grid row justify-content-md-center">
                <Col sm={1} md={3}>
                    <img src={logo} className="logo" alt="logo deafriend" />
              <div>
              <Form>
                <FormGroup>
                   <Label for="exampleEmail">Email</Label>
                    <Input placeholder="Escribe tu email" value={this.state.email} onChange={this.handleChange} type="email" name="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input placeholder="Escribe tu contraseña" value={this.state.password} onChange={this.handleChange} type="password" name="password" />
                </FormGroup>
                <Button className="col align-self-start mb-2 btn btn-info" size="md" onClick={this.login} >Login</Button>
                <Button className="col align-self-end btn btn-light"  size="md" onClick={this.signup} >Signup</Button>
                </Form>
              </div>
                </Col>
                </Row>
                <Row className="row justify-content-md-center mt-3">
                    <Col sm={1} md={3} >
                    <Button color="danger" onClick={this.google}>G</Button>{' '}
                    <Button color="primary" onClick={this.facebook} >F</Button>{' '}
                    </Col>
                </Row>
            </section>   
        )
    }
}

export default Login;