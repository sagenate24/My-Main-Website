import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { getPosts } from '../utils/Data';
import ProgressBar from "react-progress-bar-plus";
import "../styles/reactProgressBar.min.css";
import "../styles/App.scss";

import NavBar from "./NavBar";
import About from "./About";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import IntroLanding from "./IntroLanding";
import { Footer } from "./shared/Footer";

class App extends Component {
  state = {
    percent: 1,
    loading: true,
    data: {}
  };

  componentDidMount() {
    getPosts()
      .then(results => {
        this.setState({ data: results });
      })
      .then(() => {
        this.setState({ percent: 100 });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 200);
      });
  }

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
    return (
      <div className="app">
        {this.showLoading()}
        {!this.state.loading ? (
          <div>
            <NavBar openLink={(href) => this.openLink(href)} />
            <div className="app_content">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <div className='home_container'>
                      <div className='introLandingWrapper'>
                        <IntroLanding />
                      </div>
                      <ProjectList
                        openLink={(href) => this.openLink(href)}
                        blogs={this.state.data.posts}
                      />
                    </div>
                  )}
                />
                <Route
                  path="/about"
                  render={() => (
                    <div className='about_container'>
                      <About />
                    </div>
                  )}
                />
                <Route
                  path="/contact"
                  render={() => <Contact />}
                />
              </Switch>
            </div>
            <Footer openLink={(href) => this.openLink(href)} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);
