import React, { Component, Fragment } from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { handleInitialData } from '../utils/helpers';
import '../styles/App.css';

import Nav from './Nav';
import About from './About';
import BlogList from './BlogList';
import Contact from './Contact';
import SideBar from './SideBar';
import Resume from './Resume';

class App extends Component {
  state = {
    percent: 1,
    loading: true,
    showSideBar: false,
    data: {},
  }

  componentDidMount() {
    handleInitialData().then((results) => {
      this.setState({ data: results });
    }).then(() => {
      this.setState({ percent: 100 });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
    });
  }

  handleMenuClick = () => {
    this.setState((prevState) => ({
      showSideBar: !prevState.showSideBar,
    }));
  }

  navigateGit = () => {
    window.open('https://github.com/sagenate24', '_blank');
  }

  showLoading() {
    if (this.state.loading) {
      return (
        <ProgressBar
          percent={this.state.percent}
          onTop={true}
          spinner={'left'}
          autoIncrement={true}
          intervalTime={4}
        />
      );
    }
  }

  render() {
    const { loading, showSideBar, data } = this.state;

    return (
      <Fragment>
        <div className='app'>
          {this.showLoading()}
          {!loading
            ? <div>
              <div className='app_header'>
                <span className='first_span'><ion-icon name='menu' onClick={this.handleMenuClick}></ion-icon></span>
                <NavLink className='header' to='/' exact >
                  <h3 className='headerh1'>Personal Site of Nathan Sage</h3>
                </NavLink>
                <span className='last_span'><ion-icon name='logo-github' onClick={this.navigateGit}></ion-icon></span>
                <Nav />
              </div>
              <div className='app_content'>
                {showSideBar
                  ? <SideBar blogs={data.posts} contact={data.contactInfo} closeSideBar={this.handleMenuClick} />
                  : null
                }
                <Switch>
                  <Route path='/' exact render={() => (
                    <BlogList blogs={data.posts} />
                  )} />
                  <Route path='/about' render={() => (
                    <About aboutMe={data.aboutMe} langs={data.languages} />
                  )} />
                  <Route path='/resume' render={() => (
                    <Resume education={data.education} aboutMe={data.aboutMe}/>
                  )} />
                  <Route path='/contact' render={() => (
                    <Contact contact={data.contactInfo} />
                  )} />
                </Switch>
              </div>
              <p className='app_footer'>Ⓒ nathansageprojects.com 2018.</p>
            </div>
            : null
          }
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
