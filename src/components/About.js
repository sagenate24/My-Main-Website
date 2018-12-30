import React from 'react';
import * as meInMexico from '../Images/mePortrait.jpeg';
import { SectionTitle } from './shared/SectionTitle'
import { myWork, mySkills } from '../utils/LangData';
import '../styles/About.css';

class About extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className='about'>
        <div className='about_intro'>
          <div className='about_avatar_container'>
            <h1>Motivated Developer From Seattle Washington</h1>
          </div>
        </div>
        <div className='about_background_content'>
          <img className='about_me_in_mexico' src={meInMexico} alt='Me in mexico' />
          <span className='about_me_desc'>Hello there! Nice to meet you <span role='img' aria-label='happy emoji'>😁</span>, I am a Front End Developer based out of Seattle Washington with a passion for web and mobile development. I have worked for The Creative Group and The Committee For Children as a front end developer. I have many hobbies such as hiking, music and most of all development! I am always looking to grow my skills as well as helping others grow through great relationships, collaboration and positivity.</span>
        </div>
        <div className='my_work_container'>
          <SectionTitle color='#fff'>My Work</SectionTitle>
          <div className='my_work_cards_container'>
            {myWork.map(card => (
              <div className='my_work_card' key={card.id}>
                <img className='my_work_img' src={card.imageUrl} alt={card.alt} />
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='my_skills_container'>
          <SectionTitle>MY SKILLS</SectionTitle>
          <div className='my_skills_cards_container'>
            {mySkills.map(card => (
              <div className='my_skills_card' key={card.id}>
                <img style={{ height: '120px' }} src={card.imageUrl} alt={card.alt} />
                <h2>{card.text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
