import React, { Component } from 'react';
import './App.css';
import firebaseConf from './config/firebaseConf';
import Login from './components/Login';
import Home from './components/Home';
// import PropTypes from 'prop-types';

// El Componente App será el principal (componente padre)
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {} 
    }
  }

  // Al momento de cargarse la pagina se llamará al metodo de firebase que nos permite identificar si un
  // usuario esta logeado.
  componentDidMount () {
    this.authListener();
  }
  //Con la información que se recibe del observador de firebase se actualiza el estado del componente
  authListener(){
    firebaseConf.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }else {
        this.setState({ user : null });
      }
    });
  }

  // Por medio de un operador ternario se muestran los componentes Home o Login según sea el caso
  render() {
    return (
      <div className="App ">
    {this.state.user ? (<Home user = {this.state.user}/>) : (<Login />)}

      </div>
    )
  }
}

// App.PropTypes = {
//   user: PropTypes.shape
// }

export default App;
