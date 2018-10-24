import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../styles/SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.sidebarContainer = React.createRef();
    this.dropDown = React.createRef();
    this.dropDownAcceleration = 1;
    this.dropDownPosition = 0;
    this.acceleration = 1;
    this.position = -300;
  }

  state = {
    showHypes: false,
  }

  componentDidMount() {  
    const sideBar = this.sidebarContainer.current;

    const animateIn = () => {
      if (this.position < -5) {
        this.acceleration += this.acceleration * 0.305
        this.position += this.acceleration;
        sideBar.style.left = `${this.position}px`;
        window.requestAnimationFrame(animateIn);
      }
    }
    sideBar.style.left = '-300px';
    window.requestAnimationFrame(animateIn);
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

    const animateOut = () => {
      if (this.position >= -300) {
        this.acceleration += this.acceleration * 0.305;
        this.position -= this.acceleration;
        sideBar.style.left = `${this.position}px`;
        window.requestAnimationFrame(animateOut);
      } else {
        closeSideBar();
      }
    }
    this.acceleration = 1;
    window.requestAnimationFrame(animateOut);
  }

  showDropDown = () => {
    const node = this.dropDown.current;
    const { showHypes } = this.state;
    this.dropDownAcceleration = 1;

    if (!showHypes) {
      const animateDown = () => {
        if (this.dropDownPosition < 180) {
          this.dropDownAcceleration += this.dropDownAcceleration * 0.45;
          this.dropDownPosition += this.dropDownAcceleration;
          node.style.height = `${this.dropDownPosition}px`;
          window.requestAnimationFrame(animateDown);
        }
      }
      this.dropDownAcceleration = 1;
      this.setState({ showHypes: true });
      window.requestAnimationFrame(animateDown);
    } else {
      const animateUp = () => {
        if (this.dropDownPosition >= 0) {
          this.dropDownAcceleration += this.dropDownAcceleration * 0.45;
          this.dropDownPosition -= this.dropDownAcceleration;
          node.style.height = `${this.dropDownPosition}px`;
          window.requestAnimationFrame(animateUp);
        }
      }
      this.dropDownAcceleration = 1;
      this.setState({ showHypes: false });
      window.requestAnimationFrame(animateUp);
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
          <h2>Portfolio</h2>
          <span onClick={this.animateOut}>✕</span>
        </div>
        <ul className='sidebar_ul'>
          <li onClick={() => this.handleNavigation('/')}>
            <ion-icon className='sidebar_icon' name="apps"></ion-icon>
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
            <ion-icon className='sidebar_icon' name="contact"></ion-icon>
            <NavLink className='sidebar_link' to='/about' exact activeClassName='active'>
              About Me
              </NavLink>
          </li>
          <li onClick={() => this.handleNavigation('/contact')}>
            <ion-icon className='sidebar_icon' name="at"></ion-icon>
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
