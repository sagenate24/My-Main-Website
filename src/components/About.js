import React from 'react';
import { myWork, mySkills } from '../utils/Data';
import { scrollToElement } from '../utils/helpers';
import '../styles/About.scss'

import { AboutBackground } from './shared/AboutBackground';
import { AboutMyWork } from './shared/AboutMyWork';
import { AboutMySkills } from './shared/AboutMySkills';

class About extends React.PureComponent {
  state = {
    imageLoaded: false
  }

  componentDidMount() {
    document.querySelector('.nav_container').style.background = '#1D252E';
    document.querySelector('.nav_container').style.position = 'fixed';
    window.scrollTo(0, 0);
  }

  handleImageLoad = () => {
    let imageLoaded = this.state.imageLoaded;
    imageLoaded = true;

    if (window.location.hash.length) {
      const sectionName = window.location.hash.replace('#', '');

      if (imageLoaded === true) {
        setTimeout(() => {
          scrollToElement(sectionName, -50);
        }, 650)
      }
    }

    this.setState({ imageLoaded })
  }

  render() {
    return (
      <div className='about'>
        <div className='about_intro'>
          <div className='about_title_container'>
            <h1 className='about_title'>Motivated Developer From Seattle, Washington</h1>
            <div className='about_title_underline' />
          </div>
        </div>
        <AboutBackground handleImageLoad={this.handleImageLoad} />
        <AboutMyWork myWork={myWork} />
        <AboutMySkills mySkills={mySkills} />
      </div>
    );
  }
}

export default About;
