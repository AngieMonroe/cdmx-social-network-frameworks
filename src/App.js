import React, { Component } from 'react';
import './App.css';
import firebaseConf from './config/firebaseConf';
import Login from './components/Login';
import Home from './components/Home';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {} 
    }
  }

  componentDidMount () {
    this.authListener();
  }

  authListener(){
    firebaseConf.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      }else {
        this.setState({ user : null });
      }
    });
  }
  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home user = {this.state.user}/>) : (<Login />)}

      </div>
    )
  }
}

// App.PropTypes = {
//   user: PropTypes.shape
// }

export default App;
