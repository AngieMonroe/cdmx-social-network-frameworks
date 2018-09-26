import React, { Component } from 'react';
import firebase from 'firebase';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
render() {
    return (
        <div>
            PostList Component
        </div>
    )
}
}

export default PostList;