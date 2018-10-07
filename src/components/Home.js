import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import NewPost from './NewPost';
import PostList from './PostList';
import './Home.css'

//El componente Home será padre de los componentes Navbar, NewPost y PostList. Utilizando las props
// se envia el estado del componente App para poder ser utilizado en los otros componentes(hijos).
class Home extends Component {

    render() {
        return (
            <div className="firstImage">
            <NavbarApp user={this.props.user}/>
            <NewPost user={this.props.user}/>
            <PostList user={this.props.user} />
            </div>
        );
    }
}

// Home.PropTypes = {
//     user: PropTypes.shape.isRequired
//   }

export default Home;