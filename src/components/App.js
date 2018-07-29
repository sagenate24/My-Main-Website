import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { getContactInfo } from '../utils/SecuredData';
import { getPosts, getMe } from '../utils/Data';
import '../styles/App.css';

import HyperLink from './hyperlink';
import Nav from './Nav';
import AboutList from './AboutList';
import BlogList from './BlogList';
import ContactMap from './ContactMap';

class App extends Component {
  state = {
    percent: 1,
    loading: true
  }

  componentDidMount() {
    getPosts().then((blogs) => {
      this.setState(() => ({ blogs }));
    })
    getMe().then((meData) => {
      this.setState(() => ({ meData }));
    });
    getContactInfo().then((contacts) => {
      this.setState(() => ({ contacts }));
    }).then(() => {
      this.setState({ percent: 100 });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1100);
    });
  }

  showLoading() {
    if (this.state.loading) {
      return (
        <ProgressBar
          percent={this.state.percent}
          onTop={true}
          spinner={'left'}
          autoIncrement={true}
          intervalTime={45}
        />
      );
    }
  }

  render() {
    return (
      <div className='app'>
        {this.showLoading()}
        <div className='app_header'>
          <NavLink className='header' to='/' exact ><h3 className='headerh1'>Personal Site Of Nathan Sage</h3></NavLink>
          <Nav />
        </div>
        <div className='app_content'>
          <Route exact path='/' render={() => (
            <div>
              <HyperLink />
              <BlogList blogs={this.state.blogs} />
            </div>
          )} />
          <Route path='/about' render={() => (
            <AboutList meData={this.state.meData} />
          )} />
          <Route path='/contact' render={() => (
            <ContactMap results={this.state.contacts} />
          )} />
        </div>
        {this.state.loading
          ? null
          : <p className='app_footer'>Ⓒ nathansageprojects.com 2018.</p>
          }
      </div>
    );
  }
}

export default App;
