import React, { Component } from 'react';
import NavbarApp from './Navbar';
import NewPost from './NewPost';
import PostList from './PostList';
import './Home.css'


class Home extends Component {

    render() {
        return (
            <div className="firstImage">
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