import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getPosts, getMe } from '../utils/Data';
import '../styles/App.css';

import Nav from './Nav';
import AboutList from './AboutList';
import BlogList from './BlogList';

class App extends Component {
  state = {}

  componentDidMount() {
    getPosts().then((blogs) => {
      this.setState(() => ({
        blogs
      }));
    });
    getMe().then((meData) => {
      this.setState(() => ({
        meData
      }));
    });
  }

  render() {
    return (
      <div className='app'>
        <div className='app_header'>
          <h3 className='header'>Projects By Nathan Sage</h3>
          <Nav />
        </div>
        <div className='app_content'>
          <Route exact path='/' render={() => (
            <BlogList blogs={this.state.blogs} />
          )} />
          <Route path='/about' render={() => (
            <AboutList meData={this.state.meData} />
          )} />
        </div>
        <p className='app_footer'>Ⓒ nathansageprojects.com 2018.</p>
      </div>
    );
  }
}

export default App;
