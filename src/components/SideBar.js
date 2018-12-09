import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { Link } from 'react-scroll';
import '../styles/SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.sidebarContainer = React.createRef();
    this.dropDown = React.createRef();
  }

  state = {
    showHypes: false,
  }

  componentDidMount() {
    const sideBar = this.sidebarContainer.current;
    sideBar.classList.remove('slideOut')
    sideBar.classList.add('slidein')
    window.addEventListener('resize', this.checkWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  }

  checkWidth = () => {
    const { closeSideBar } = this.props;

    if (window.innerWidth >= 700) {
      closeSideBar();
    }
  }

  animateOut = () => {
    const { closeSideBar } = this.props;
    const sideBar = this.sidebarContainer.current;
    sideBar.classList.remove('slidein')
    sideBar.classList.add('slideOut')
    setTimeout(() => {
      closeSideBar();
    }, 350);
  }

  showDropDown = () => {
    const node = this.dropDown.current;
    const { showHypes } = this.state;

    if (!showHypes) {
      node.classList.remove('dropDownClose');
      node.classList.add('dropDownOpen');
      this.setState({ showHypes: true });
    } else {
      node.classList.remove('dropDownOpen');
      node.classList.add('dropDownClose');
      this.setState({ showHypes: false });
    }
  }

  handleNavigation = (route) => {
    this.props.history.push(route);
    if (route === '/') {
      this.showDropDown();
    } else {
      setTimeout(() => { this.animateOut() }, 500);
    }
  }

  render() {
    const { showHypes } = this.state;
    const { blogs } = this.props;

    return (
      <div className='sidebar' ref={this.sidebarContainer}>
        <div className='sidebar_header'>
          <IoMdMenu className='sidebar_logo sidebar_menu' onClick={() => this.animateOut()} />
          <div className='sidebar_title'>
            <h2>Nathan Sage</h2>
            <p>Front End Developer</p>
          </div>
        </div>
        <ul className='sidebar_ul'>
          <li onClick={() => this.handleNavigation('/')}>
            <NavLink className='sidebar_link' to='/' exact activeClassName='active'>
              Projects
              </NavLink>
            <div className='dropdown_icon'>
              {showHypes
                ? <ion-icon name="arrow-dropup"></ion-icon>
                : <ion-icon name="arrow-dropdown"></ion-icon>
              }
            </div>
          </li>
          <nav className='sidebar_hypes' ref={this.dropDown}>
            <ul className='sidebar_ul'>
              {blogs.map(item => (
                <li key={item.id}>
                  <Link
                    onClick={() => {
                      setTimeout(() => { this.animateOut() }, 1000);
                    }}
                    href={`#${item.id}`}
                    className='hyper_link'
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                  >{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <li onClick={() => this.handleNavigation('/about')}>
            <NavLink className='sidebar_link' to='/about' exact activeClassName='active'>
              About Me
            </NavLink>
          </li>
          <li onClick={() => this.handleNavigation('/contact')}>
            <NavLink onClick={this.checkLocation} className='sidebar_link' to='/contact' exact activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(SideBar);
