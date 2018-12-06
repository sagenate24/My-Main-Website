import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import '../styles/App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarStyle: 'nav_container nav_absolute'
    }
    this.container = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent = () => {
    if (window.scrollY > window.innerHeight && this.state.navbarStyle !== 'nav_container nav_fixed') {
      this.setState({ navbarStyle: 'nav_container nav_fixed' });
    } else if (window.scrollY < window.innerHeight && this.state.navbarStyle !== 'nav_container nav_absolute') {
      this.setState({ navbarStyle: 'nav_container hide_nav'});
      setTimeout(() => {
        this.setState({ navbarStyle: 'nav_container nav_absolute'});
      }, 400)
    }
  }


  render() {
    return (
      <div className={this.state.navbarStyle} >
        <IoMdMenu className='nav_logo first_span' onClick={this.handleMenuClick} />
        <NavLink className='header' to='/' exact>
          <h2 className='headerh1'>Nathan Sage</h2>
        </NavLink>
        <IoLogoGithub className='nav_logo last_span' onClick={this.navigateGit} />
        <IoMdMail className='nav_logo last_span'/>
        <IoLogoLinkedin className='nav_logo last_span'/>
      </div>
    );
  }
}

export default NavBar;