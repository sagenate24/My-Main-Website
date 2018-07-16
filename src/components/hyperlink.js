import React, { Component } from 'react';
import '../styles/hyperlink.css';

class HyperLink extends Component {
  render() {
    return (
      <nav className='hyper_nav'>
        <ul>
          <li>
            <a href='#MyReads' className='hyper_link'>MyReads ⌄</a>
          </li>
          <li>
            <a href='#Jamming' className='hyper_link'>Jamming ⌄</a>
          </li>
          <li>
            <a href='#devour' className='hyper_link'>devour ⌄</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HyperLink;
