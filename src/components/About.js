import React, { Component } from 'react';
import * as avatar from '../Images/avatar.jpeg';
import * as meInMexico from '../Images/mePortrait.jpeg';
import { SectionTitle } from './shared/SectionTitle'
import { myWork } from '../utils/LangData';
import '../styles/About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.parallax = React.createRef();
  }

  render() {
    if (this.props && this.props.aboutMe) {
      const { shortDesk, description, frameWorks, gitHubUrl } = this.props.aboutMe;

      return (
        <div className='about'>
          <div className='about_intro'>
            <div className='about_avatar_container'>
              <img className='about_avatar' src={avatar} alt='selfie' />
              <h2>Motivated Developer From Seattle Washington</h2>
            </div>
          </div>
          <div className='about_background_content'>
            <img className='about_me_in_mexico' src={meInMexico} alt='Me in mexico' />
            <span>Hello there! Nice to meet you 😁, I am a Front End Developer based out of Seattle Washington with a passion for web and mobile development. I have worked for The Creative Group and The Committee For Children as a front end developer. I have many hobbies such as hiking, music and most of all development. I am always looking to grow my skills as well as helping others grow there's through great relationships, collaboration and positivity.</span>
          </div>
          <div className='my_work_container'>
          <SectionTitle color='#fff'>MY WORK</SectionTitle>
            <div className='my_work_cards_container'>
              {myWork.map(card => (
                <div className='my_work_card' key={card.id}>
                  <img className='my_work_icon' src={card.imageUrl} alt={card.alt} />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='about_frameworks'>
            <h2>Frameworks and Libraries</h2>
            <div className='about_frame'>
              {frameWorks.map((framework) => {
                return (
                  <div className='frames' key={framework.title}>
                    <h4 className='frame_title'>{framework.title}</h4>
                    <p className='frame_name'>{framework.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default About;
