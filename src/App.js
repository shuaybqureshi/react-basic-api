import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/Post'
import FullPost from './components/FullPost/FullPost'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Post} exact />
          <Route path="/FullPost/:id" component={FullPost} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
