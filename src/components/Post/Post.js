import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';

class Post extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            let data = response.data.slice(0, 5);
            this.setState({ posts: data });
        });
    }
    postSelectedHandler(id) {
        this.props.history.push('/Fullpost/' + id);
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (this.state.posts.length > 0) {
            posts = this.state.posts.map(post => {
                return (
                    <div className="card"
                        key={post.id}>
                        <h3 className="title">Card {post.id}</h3>
                        <h3 className="sub-title">{post.title.substring(0, 20)}</h3>
                        <button className="btn"
                            onClick={() => this.postSelectedHandler(post.id)}
                        >MORE INFO</button>
                    </div>
                )
            });
        }

        return (
            <div>
                <div className="container">
                    {posts}
                </div>
            </div>
        )
    }
}

export default Post;