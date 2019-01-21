import React from 'react';
import { SectionTitle } from './SectionTitle'
import { Element } from 'react-scroll'

export const AboutMySkills = props => (
  <Element className='my_skills_container' name='mySkills'>
    <SectionTitle color='#000'>My Skills</SectionTitle>
    <div className='my_skills_cards_container'>
      {props.mySkills.map(card => (
        <div className='my_skills_card' key={card.id}>
          <img title={card.alt} src={card.imageUrl} alt={card.alt} />
          <h2>{card.text}</h2>
        </div>
      ))}
    </div>
  </Element>
);
