import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import '../styles/App.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav_container nav_absolute' >
        <IoMdMenu className='nav_logo first_span' onClick={this.props.handleMenuClick} />
        <NavLink className='header' to='/' exact>
          <h2 className='headerh1'>Nathan Sage</h2>
        </NavLink>
        <IoLogoGithub className='nav_logo last_span' onClick={() => this.props.openLink('https://github.com/sagenate24')} />
        <IoMdMail className='nav_logo last_span' />
        <IoLogoLinkedin className='nav_logo last_span' onClick={() => this.props.openLink('https://www.linkedin.com/in/nathan-sage-689296163/')} />
      </div>
    );
  }
}

export default NavBar;
