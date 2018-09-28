import React, { Component } from 'react';
import NavbarApp from './Navbar';
import NewPost from './NewPost';
import PostList from './PostList';
import PropTypes from 'prop-types';


class Home extends Component {

    render() {
        return (
            <fragment>
            <NavbarApp user={this.props.user}/>
            <NewPost user={this.props.user}/>
            <PostList />
            </fragment>
        );
    }
}

Home.PropTypes = {
    user: PropTypes.shape.isRequired
  }

export default Home;