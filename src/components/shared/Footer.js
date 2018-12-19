import React, { Component } from 'react';
import { IoMdPhonePortrait, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import '../../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer_container'>
        <div className='footer_background_info'>
          <h2>Nathan Sage</h2>
          <p>As a developer, I have a a passion for creating. Lets create together.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
