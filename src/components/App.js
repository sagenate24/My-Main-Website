import React, { Component } from 'react';
import '../styles/App.css';
import { getPosts } from '../utils/Data';

import BlogList from './BlogList';

class App extends Component {
  state = {}

  componentDidMount() {
    getPosts().then((blogs) => {
      this.setState(() => ({
        blogs
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <BlogList blogs={this.state.blogs} />
      </div>
    );
  }
}

export default App;
