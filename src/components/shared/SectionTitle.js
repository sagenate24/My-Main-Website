import React from 'react';
import '../../styles/App.scss';

export const SectionTitle = (props) => (
  <div className='section_title_container'>
    <h1
      style={{
        color: `${props.color ? props.color : '#3A3A3A'}`,
        fontSize: '50px',
        padding: 0,
        margin: 0,
      }}
    >{props.children}</h1>
    <div
      style={{
        width: `${props.lineWidth ? props.lineWidth : '80px'}`,
        height: '5px',
        background: `${props.color ? props.color : '#3A3A3A'}`
      }} />
  </div>
);
