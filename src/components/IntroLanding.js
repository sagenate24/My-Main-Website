import React, { Component } from "react";
import * as needle from "../Images/needle.jpg";
import * as avatar from "../Images/meWithGlasses.png";
import "../styles/IntroLanding.css";

class IntroLanding extends Component {
  constructor() {
    super();

    this.heroChildren = React.createRef();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setListener = () => {
    let supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) { }

    window.addEventListener('scroll', this.handleScroll, supportsPassive ? { passive: true } : false);
  }

  handleScroll = () => {
    if (window.pageYOffset < window.innerHeight) {

      const setTranslate = (yPos) => {
        this.heroChildren.current.style.transform = "translate3d(0, " + yPos + "px, 0";
      }

      let yScrollPos;
      yScrollPos = window.pageYOffset * -0.15;
      yScrollPos = yScrollPos.toFixed(3);

      setTranslate(yScrollPos);
      requestAnimationFrame(this.handleScroll);
    }
  }

  render() {
    return (
      <div className='IntroLanding-container'>
        <div
          className='hero-image'
          style={{ backgroundImage: `url(${needle})` }}
        />
        <div ref={this.heroChildren} className='hero-children'>
          <img
            src={avatar}
            alt='avatar-img'
            className='avatar-img'
            onLoad={this.setListener}
            // onScroll={this.handleScroll}
          />
          <h1>Front End Developer</h1>
        </div>
      </div>
    );
  }
}

export default IntroLanding;
