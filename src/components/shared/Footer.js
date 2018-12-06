import React, { Component } from 'react';
import { IoMdPhonePortrait, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import '../../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer_container'>
        <div className='footer_top'>
          <IoLogoLinkedin className='footer_icon'/>
          <IoMdMail className='footer_icon'/>
          <IoLogoGithub className='footer_icon'/>
          <IoMdPhonePortrait className='footer_icon'/>
        </div>
        <div className='footer_bottom'>
          <span>NATHAN SAGE </span>
          <span>©2018</span>
        </div>
      </div>
    );
  }
}

export default Footer;
