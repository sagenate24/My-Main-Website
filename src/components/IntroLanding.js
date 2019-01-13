import React, { Component } from "react";
import { isPassive } from '../utils/helpers';
import { Link } from 'react-scroll';
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

  removeAnimation = () => {
    if (document.querySelector('.arrow_down').classList.contains('bob_animation')) {
      document.querySelector('.arrow_down').classList.remove('bob_animation');
      document.querySelector('.arrow_down').style.display = 'none';
    }
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
        <div className='go_to_projects'>
          <Link
            aria-label='Auto scroll to main projects'
            onClick={this.removeAnimation}
            href='project_list'
            className='hyper_link'
            to='project_list'
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            <div className='arrow_down bob_animation' />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroLanding;