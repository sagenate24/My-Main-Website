import React from 'react';
import * as meInMexico from '../../Images/mePortrait.jpg';
import { Element } from 'react-scroll';

export const AboutBackground = props => (
  <Element className='about_background_content' name='background'>
    <img
      onLoad={props.handleImageLoad}
      className='about_me_in_mexico'
      src={meInMexico}
      alt='Me in mexico'
    />
    <span className='about_me_desc'>Hello there! Nice to meet you <span role='img' aria-label='happy emoji'>😁</span>, I am a Front End Developer based out of Seattle Washington with a passion for web and mobile development. I have worked for The Creative Group and the Committee For Children as a Front End Developer. I have many hobbies such as hiking, playing music and of course development! I am always looking to grow my skills as well as helping others grow through great relationships, collaboration and positivity.</span>
  </Element>
);
