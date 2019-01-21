import React from 'react';
import '../../styles/Loader.scss'

export const Loader = props => (
  props.loading ?
    <div className='loader_container'>
      <div className='loader' />
    </div>
    : null
);
