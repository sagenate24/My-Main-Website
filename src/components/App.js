import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ProgressBar from "react-progress-bar-plus";
import "react-progress-bar-plus/lib/progress-bar.css";
import { getPosts } from '../utils/Data';
import "../styles/App.css";

import NavBar from "./NavBar";
import About from "./About";
import BlogList from "./BlogList";
import Contact from "./Contact";
import SideBar from "./SideBar";
import IntroLanding from "./IntroLanding";
import Footer from "./shared/Footer";

class App extends Component {
  state = {
    percent: 1,
    loading: true,
    showSideBar: false,
    data: {}
  };

  componentDidMount() {
    getPosts()
      .then(results => {
        console.log(results)
        this.setState({ data: results });
      })
      .then(() => {
        this.setState({ percent: 100 });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 200);
      });
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      showSideBar: !prevState.showSideBar
    }));
  };

  openLink = (href) => {
    window.open(href, "_blank");
  };

  showLoading() {
    if (this.state.loading) {
      return (
        <ProgressBar
          percent={this.state.percent}
          onTop={true}
          spinner={"left"}
          autoIncrement={true}
          intervalTime={4}
        />
      );
    }
  }

  render() {
    const { loading, showSideBar, data } = this.state;
    const currentPath = this.props.history.location.pathname;

    return (
      <Fragment>
        <div className="app">
          {this.showLoading()}
          {!loading ? (
            <div>
              <div className="app_header_container">
                <NavBar location={currentPath} openLink={(href) => this.openLink(href)} handleMenuClick={this.handleMenuClick}/>
              </div>
              <div className="app_content">
                {showSideBar ? (
                  <SideBar
                    blogs={data.posts}
                    contact={data.contactInfo}
                    closeSideBar={this.handleMenuClick}
                  />
                ) : null}
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <div className='home_container'>
                        <div className='introLandingWrapper'>
                        <IntroLanding />
                        </div>
                        <BlogList blogs={data.posts} location={currentPath}/>
                      </div>
                    )}
                  />
                  <Route
                    path="/about"
                    render={() => (
                      <div className='about_container'>
                        <About aboutMe={data.aboutMe} langs={data.languages} location={currentPath}/>
                      </div>
                    )}
                  />
                  <Route
                    path="/contact"
                    render={() => <Contact contact={data.contactInfo} location={currentPath}/>}
                  />
                </Switch>
              </div>
              <Footer 
                openLink={(href) => this.openLink(href)}
                location={this.props.location}
                history={this.props.history}
              />
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
