import React, { Component } from 'react';
import NavbarApp from './Navbar';
import NewPost from './NewPost';
import PostList from './PostList';
// import PropTypes from 'prop-types';
// Wes Bos videos youtube para aprender más.... Shirley Wu  funfun Function 
// <Router path = "home/:id" />
//Babel js help
//zeit para hacer deploye
//En lugar de utilizar propstype utilizar flow 

class Home extends Component {

    render() {
        return (
            <div>
            <NavbarApp user={this.props.user}/>
            <NewPost user={this.props.user}/>
            <PostList />
            </div>
        );
    }
}

// Home.PropTypes = {
//     user: PropTypes.shape.isRequired
//   }

export default Home;