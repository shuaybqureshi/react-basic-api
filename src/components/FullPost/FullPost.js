import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';
import { NavLink } from 'react-router-dom';

class FullPost extends Component {
  state = {
    postData: [],
    dataLoaded: false
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
      this.setState({
        postData: response.data,
        dataLoaded: true
      });
    });
  }
  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <div className="full-card"> 
            <div className="full-container">
              <h4 className="fc-title"><b>Card #{this.state.postData.id}</b></h4>
              <h4 className="fc-title"><b>TITLE</b></h4>
              <p className="fc-sub-title"> {this.state.postData.title}</p>
              <h4 className="fc-title"><b>BODY</b></h4>
              <p className="fc-sub-title"> {this.state.postData.body}</p>
            </div>
          </div>
          <div>
            <button className="fc-btn">
              <NavLink to="/"
                className="btn-text"
              >Go Back</NavLink>
            </button>
          </div>
        </div>
      );
    }else {
      return (
        <h1>LOADING</h1>
      )
    }
  }
}
export default FullPost;