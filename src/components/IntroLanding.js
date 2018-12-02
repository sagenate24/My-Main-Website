import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import * as needle from "../Images/nature-min.jpg";
import * as avatar from "../Images/meWithGlasses.png";
import PropTypes from "prop-types";

import "../styles/IntroLanding.css";

class IntroLanding extends Component {
  render() {
    return (
      <ParallaxProvider>
          <HeroBanner min={"-20%"} max={"20%"} image={needle}>
            <Image src={avatar} className="avatar-img" />
            <h1>Front End Developer</h1>
          </HeroBanner>
      </ParallaxProvider>
    );
  }
}

const HeroBanner = ({ image, min, max, children }) => (
  <div className="hero-container">
    <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
      <div
        className='hero-image'
        style={{ backgroundImage: `url(${image})` }}
      />
    </Parallax>
    <div className="hero-children">{children}</div>
  </div>
);

class Image extends Component {
  static contextTypes = {
    parallaxController: PropTypes.object.isRequired
  };

  handleLoad = () => {
      this.context.parallaxController.update();
  };

  render() {
    return (
      <img
        src={this.props.src}
        onLoad={this.handleLoad}
        className={this.props.className}
      />
    );
  }
}

export default IntroLanding;
