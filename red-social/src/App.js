import React, { Component } from 'react';
import './App.css';
import firebaseConf from './config/firebaseConf';
import Login from './components/Login';
import Home from './components/Home';

/*
class List extends Component {
  constructor (props){
    super (props); 
  }
  render() {
    const {usuarios} = this.props;   //Puedo guardar en una variable permite claridad en código
    return (
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}> Este es el usuario {usuario}</li>
      ))}
    </ul>
  );
}
}

//Primer componente (PADRE)
class App extends Component {
  constructor(props){  // Recibe unas propiedades en javascript serian parametros
    super(props); // Estas props se pasan a super Hereda la funcionalidad
    // state Es el estado de los datos es un objeto. Esto se administra en memoria por lo que entre más sencillo mejor
    this.state = {
      mostrarList : true
    }
  }
  showList() {
    this.setState({mostrarList: !this.state.mostrarList})
  }
  renderList (usuarios){
    const {mostrarList} = this.state;
    if(mostrarList){
      return <List usuarios = {usuarios} />
    }else
    return <h2>No hay listado para mostrar</h2>
  }
  render() {
    // Antes de return se puede escribir toda la lógica de javascript considerando que el
    // return nos va a regresar un html
    const usuarios = ['Ana', 'Ian', 'Carlos'];
    return (
      <div>
          <h1>Hola Mundo</h1>    
          <div>
            {this.renderList (usuarios)}
            <Button onClick={()=>this.showList()} bsStyle =  "primary" >Mostrar listado</Button>
          </div>
      </div>
    );
  }
}
*/

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

export default App;
