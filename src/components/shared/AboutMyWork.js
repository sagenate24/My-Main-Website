import React from 'react';
import { SectionTitle } from './SectionTitle'
import { Element } from 'react-scroll'

export const AboutMyWork = props => (
  <Element className='my_work_container' name='myWork'>
    <SectionTitle color='#000'>My Work</SectionTitle>
    <div className='my_work_cards_container'>
      {props.myWork.map(card => (
        <div className='my_work_card' key={card.id}>
          <img
            className='my_work_img'
            title={card.alt}
            src={card.imageUrl}
            alt={card.alt}
          />
          <h1>{card.title}</h1>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  </Element>
);
