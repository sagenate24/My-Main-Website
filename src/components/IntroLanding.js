import React, { Component } from "react";
import * as needle from "../Images/needle.jpg";
import * as avatar from "../Images/meWithGlasses.png";
import "../styles/IntroLanding.css";

class IntroLanding extends Component {
  render() {
    return (
      <div className='IntroLanding-container'>
        <div
          className='hero-image'
          style={{ backgroundImage: `url(${needle})` }}
        />
        <div className='hero-children'>
          <img
            src={avatar}
            alt='avatar-img'
            className={'avatar-img'}
          />
          <h1>Front End Developer</h1>
        </div>
      </div>
    );
  }
}


export default IntroLanding;
