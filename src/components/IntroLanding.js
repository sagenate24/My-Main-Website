import React, { Component } from "react";
<<<<<<< HEAD
import { isPassive } from '../utils/helpers';
import * as avatar from "../Images/meWithGlasses.png";
import '../styles/IntroLanding.scss'
=======
import * as needle from "../Images/needle.jpg";
import * as avatar from "../Images/meWithGlasses.png";
import "../styles/IntroLanding.css";
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282

class IntroLanding extends Component {
  constructor() {
    super();

    this.heroChildren = React.createRef();
<<<<<<< HEAD
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
=======
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
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282

    window.addEventListener('scroll', this.handleScroll, supportsPassive ? { passive: true } : false);
  }

  handleScroll = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
  }

  render() {
    return (
      <div className='IntroLanding-container'>
<<<<<<< HEAD
        <div className='hero-image' />
=======
        <div
          className='hero-image'
          style={{ backgroundImage: `url(${needle})` }}
        />
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
        <div ref={this.heroChildren} className='hero-children'>
          <img
            src={avatar}
            alt='avatar-img'
            className='avatar-img'
            onLoad={this.setListener}
<<<<<<< HEAD
=======
            // onScroll={this.handleScroll}
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
          />
          <h1>Front End Developer</h1>
        </div>
      </div>
    );
  }
}

export default IntroLanding;
