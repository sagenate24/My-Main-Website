import React, { Component } from 'react';
import { IoMdPhonePortrait, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import '../../styles/Footer.css';

class Footer extends Component {

  goTo = (local) => {
    window.open(local, '_blank');
  }
  render() {
    return (
      <div className='footer_container'>
        <div className='footer_left'>
          <h2>Nathan Sage</h2>
          <p>Front End Developer.</p>
        </div>
        <div className='footer_right'>
          <p>As a developer, I have a passion for creating new and exciting experiences.<br /> Lets get together!</p>
          <div className='footer_right_body'>
            <div className='footer_rb_content'>
              <p>Let's Connect</p>
              <a>+1 (360) 349-6448</a>
              <a>sagenate24@gmail.com</a>
            </div>
            <div className='footer_rb_content'>
              <p>Recent Projects</p>
              <NavLink to='/' exact activeClassName='active'>Second Step</NavLink>
              <NavLink to='/about' exact activeClassName='active'>Flash Cards</NavLink>
              <NavLink to='/contact' exact activeClassName='active'>Would You Rather</NavLink>
              <NavLink to='/' exact activeClassName='active'>My Reads</NavLink>
              <NavLink to='/about' exact activeClassName='active'>Jamming</NavLink>
              <NavLink to='/contact' exact activeClassName='active'>devour</NavLink>
            </div>
            <div className='footer_rb_content'>
              <p>Quick Links</p>
              <NavLink to='/' exact activeClassName='active'>Projects</NavLink>
              <NavLink to='/about' exact activeClassName='active'>About Me</NavLink>
              <NavLink to='/contact' exact activeClassName='active'>Contact</NavLink>
            </div>
            <div className='footer_rb_content'>
              <div className='footer_rb_content_links'>
                <IoLogoLinkedin className='footer_icon' onClick={() => this.props.openLink()} />
                <IoMdMail className='footer_icon' onClick={() => this.props.openLink()} />
                <IoLogoGithub className='footer_icon' onClick={() => this.props.openLink()} />
                <IoMdPhonePortrait className='footer_icon' onClick={() => this.props.openLink()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
