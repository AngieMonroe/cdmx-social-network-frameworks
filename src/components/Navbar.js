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
import './Navbar.css';
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
      const userName = this.props.user.displayName;
      return (
        <div>
          <Navbar color="secondary" light expand="md">
            <NavbarBrand href="/"> <a className="navbar-brand d-inline-block align-top">
            <img src={logo} width="130" height="50" alt="logo deafriend"></img></a>
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