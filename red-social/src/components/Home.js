import React, { Component } from 'react';
import NavbarApp from './Navbar';
import NewPost from './NewPost';
import PostList from './PostList';

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

export default Home;