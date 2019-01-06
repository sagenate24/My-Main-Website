import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ProgressBar from "react-progress-bar-plus";
<<<<<<< HEAD
import "../styles/reactProgressBar.min.css";
import { getPosts } from '../utils/Data';
import "../styles/App.scss";

import NavBar from "./NavBar";
import About from "./About";
import ProjectList from "./ProjectList";
=======
import "react-progress-bar-plus/lib/progress-bar.css";
import { getPosts } from '../utils/Data';
import "../styles/App.css";

import NavBar from "./NavBar";
import About from "./About";
import BlogList from "./BlogList";
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
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
<<<<<<< HEAD
=======
        console.log(results)
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
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
<<<<<<< HEAD
              <NavBar openLink={(href) => this.openLink(href)} handleMenuClick={this.handleMenuClick} />
=======
              <div className="app_header_container">
                <NavBar location={currentPath} openLink={(href) => this.openLink(href)} handleMenuClick={this.handleMenuClick}/>
              </div>
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
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
<<<<<<< HEAD
                          <IntroLanding />
                        </div>
                        <ProjectList blogs={data.posts} />
=======
                        <IntroLanding />
                        </div>
                        <BlogList blogs={data.posts} location={currentPath}/>
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
                      </div>
                    )}
                  />
                  <Route
                    path="/about"
                    render={() => (
                      <div className='about_container'>
<<<<<<< HEAD
                        <About aboutMe={data.aboutMe} langs={data.languages} />
=======
                        <About aboutMe={data.aboutMe} langs={data.languages} location={currentPath}/>
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
                      </div>
                    )}
                  />
                  <Route
                    path="/contact"
<<<<<<< HEAD
                    render={() => <Contact contact={data.contactInfo} />}
                  />
                </Switch>
              </div>
              <Footer openLink={(href) => this.openLink(href)} />
=======
                    render={() => <Contact contact={data.contactInfo} location={currentPath}/>}
                  />
                </Switch>
              </div>
              <Footer 
                openLink={(href) => this.openLink(href)}
                location={this.props.location}
                history={this.props.history}
              />
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
