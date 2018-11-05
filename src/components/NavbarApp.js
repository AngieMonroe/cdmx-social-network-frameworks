import React, { Component } from 'react';
import logo from './logodeafriend2.png';
import firebaseConf from '../config/firebaseConf';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';
import './NavbarApp.css';
import PropTypes from 'prop-types';
import './ProfileUser';

class NavbarApp extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.logout = this.logout.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });  
    }

    //Función de firebase para cerrar sesión, ahora es un método del componente NavbarApp
    logout(){
      firebaseConf.auth().signOut()
      .then(function() {
          console.log('Saliendo...');
        })
        .catch(function(error) {
          console.log(error);
        });
    }


    render() {
      //Con la información del estado de App que se ha pasado por medio de las props se puede consultar el 
      //nombre del usuario logueado
      const userName = this.props.user.displayName;
      return (
        <div>
          <Navbar color="secondary" light expand="md" fixed="top">
            <NavbarBrand href="/"className="navbar-brand d-inline-block align-top">
            <img src={logo} width="130" height="50" alt="logo deafriend"></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="text-white">Bienvenidx {userName}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="./Home">Muro</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="./ProfileUser">Perfil    </NavLink>
                </NavItem>
                <NavItem >
                  <Button  color="info" size="md" onClick={this.logout} >Cerrar Sesión</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  Navbar.PropTypes = {
    user: PropTypes.shape.isRequired
  }

  export default NavbarApp;