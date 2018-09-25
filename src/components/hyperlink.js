import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/hyperlink.css';

class HyperLink extends Component {
  render() {
    return (
      <nav className='hyper_nav'>
        <ul>
          <li>
            <Link href='#wouldYouRather' className='hyper_link' to='wouldYouRather' spy={true} smooth={true} offset={10} duration={600}>Would You Rather</Link>
          </li>
          <li>
            <Link href='#MyReads' className='hyper_link' title='hah get it?' to='MyReads' spy={true} smooth={true} offset={10} duration={600}>MyReads ⚓️</Link>
          </li>
          <li>
            <Link href='#Jamming' className='hyper_link' title={'it\'s an \'Anchor\' tag'} to='Jamming' spy={true} smooth={true} offset={10} duration={600}>Jamming ⚓️</Link>
          </li>
          <li>
            <Link href='#devour' className='hyper_link' title={'nevermind, bad joke...sorry'} to='devour' spy={true} smooth={true} offset={10} duration={600}>devour ⚓️</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HyperLink;
