import React, { Component } from "react";
import { isPassive } from '../utils/helpers';
import * as avatar from "../Images/meWithGlasses.png";
import '../styles/IntroLanding.scss'

class IntroLanding extends Component {
  constructor() {
    super();

    this.heroChildren = React.createRef();
    this.paralaxAnimation = null;
  }

  componentDidMount() {
    document.querySelector('.nav_container').style.background = 'none';
    document.querySelector('.nav_container').style.position = 'absolute';
  }

  componentWillUnmount() {
    const supportsPassive = isPassive();

    window.removeEventListener('scroll', this.handleScroll, supportsPassive ? { passive: true } : false);
  }

  setListener = () => {
    const supportsPassive = isPassive();

    window.addEventListener('scroll', this.handleScroll, supportsPassive ? { passive: true } : false);
  }

  handleScroll = () => {
    requestAnimationFrame(() => {
      if (window.pageYOffset < window.innerHeight && this.heroChildren.current !== null) {
        document.querySelector('.nav_container').style.position = 'absolute';
        document.querySelector('.nav_container').style.background = 'none';
        const setTranslate = (yPos) => {
          this.heroChildren.current.style.transform = "translate(0, " + yPos + "px)";
          this.heroChildren.current.style.transition = "transform 50ms";
        }

        let yScrollPos;
        yScrollPos = window.pageYOffset * -0.3;
        yScrollPos = yScrollPos.toFixed(3);

        setTranslate(yScrollPos);
      } else {
        document.querySelector('.nav_container').style.position = 'fixed';
        document.querySelector('.nav_container').style.background = '#1D252E';
      }
    })
  }

  render() {
    return (
      <div className='IntroLanding-container'>
        <div className='hero-image' />
        <div ref={this.heroChildren} className='hero-children'>
          <img
            src={avatar}
            alt='avatar-img'
            className='avatar-img'
            onLoad={this.setListener}
          />
          <h1>Front End Developer</h1>
        </div>
      </div>
    );
  }
}

export default IntroLanding;