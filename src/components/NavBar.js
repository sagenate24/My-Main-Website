import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import '../styles/App.css';

// TODO: remove scroll event listener on pages !== '/'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarStyle: 'nav_container nav_absolute',
      path: null
    }
    this.container = React.createRef();
  }

  componentDidMount() {
    this._addListener()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentPath !== state.path) {
      return {
        path: props.currentPath,
      };
    } else {
      return null;
    }
  }

  _addListener = () => {
    window.addEventListener('scroll', this.handleScrollEvent);
    this.handleScrollEvent();
  }

  _removeListener = () => {
    this.setState({ navbarStyle: 'nav_container nav_fixed' });
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent = () => {
    if (window.scrollY > window.innerHeight && this.state.navbarStyle !== 'nav_container nav_fixed') {
      this.setState({ navbarStyle: 'nav_container nav_fixed' });
    } else if (window.scrollY < window.innerHeight && this.state.navbarStyle !== 'nav_container nav_absolute') {
      this.setState({ navbarStyle: 'nav_container hide_nav' });
      setTimeout(() => {
        this.setState({ navbarStyle: 'nav_container nav_absolute' });
      }, 400)
    }
  }

  render() {
    const { path } = this.state;
    let navBarClassName;

    if (path === '/') {
      navBarClassName = this.state.navbarStyle;
    } else {
      navBarClassName = 'nav_container nav_fixed_no_animation'
    }

    return (
      <div className={navBarClassName} >
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