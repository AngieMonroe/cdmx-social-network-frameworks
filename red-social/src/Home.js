import React, { Component } from 'react';
import fire from './config/fire';
import { Button } from 'reactstrap';
import logo from './logodeafriend2.png';


class Home extends Component {
    constructor (props){
        super (props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut()
        .then(function() {
            console.log('Saliendo...');
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand d-inline-block align-top"> <img src={logo} width="100" height="50" alt="logo deafriend"></img>
                </a>
                <Button color="info" size="md" onClick={this.logout} >Logout</Button>
            </nav>
        )
    }
}

export default Home;