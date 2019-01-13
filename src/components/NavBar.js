import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import '../styles/NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className='nav_container' >
        <IoMdMenu className='nav_logo first_logo' onClick={this.props.handleMenuClick} />
        <NavLink className='nav_title_container nav_title'to='/' exact>
          <h2 className='nav_title'>Nathan Sage</h2>
        </NavLink>
        <IoLogoGithub className='nav_logo last_logo' onClick={() => this.props.openLink('https://github.com/sagenate24')} />
        <NavLink to='/contact' aria-label='Link To Contact Page' exact><IoMdMail className='nav_logo last_logo'/></NavLink>
        <IoLogoLinkedin className='nav_logo last_logo' onClick={() => this.props.openLink('https://www.linkedin.com/in/nathan-sage-689296163/')} />
      </div>
    );
  }
}

export default NavBar;
