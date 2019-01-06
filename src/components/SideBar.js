import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import * as me from '../Images/me.png';
import * as resumePdf from '../Images/Resume/NathanSageResume.pdf'
import { IoMdMenu } from 'react-icons/io'
import { MdOpenInNew } from 'react-icons/md'
import { Link } from 'react-scroll';
import '../styles/SideBar.scss';

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

    if (window.location.pathname !== '/') {
      document.querySelector('.dropdown_icon').style.display = 'none';
    } else {
      document.querySelector('.dropdown_icon').style.display = 'initial';
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

    if (window.location.pathname === '/') {
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
  }

  awaitAnimateOut = () => {
    setTimeout(() => { this.animateOut() }, 500);
  }

  render() {
    const { showHypes } = this.state;
    const { blogs } = this.props;

    return (
      <div>
        <div className='sidebar' ref={this.sidebarContainer}>
          <div className='sidebar_header'>
            <IoMdMenu className='sidebar_logo sidebar_menu' onClick={() => this.animateOut()} />
            <div className='sidebar_title'>
              <img alt='funny head' className='sidebar_head' src={me} />
              <p>Front End Developer</p>
            </div>
          </div>
          <ul className='sidebar_ul'>
            <li className='sidebar_li'>
              <NavLink onClick={this.awaitAnimateOut} className='sidebar_link' to='/' exact activeClassName='active'>
                Projects
              </NavLink>
              <div className='dropdown_icon'>
                {showHypes
                  ? <ion-icon name="arrow-dropup" onClick={this.showDropDown}></ion-icon>
                  : <ion-icon name="arrow-dropdown" onClick={this.showDropDown}></ion-icon>
                }
              </div>
            </li>
            <nav className='sidebar_hyper' ref={this.dropDown}>
              <ul className='sidebar_hyper_ul'>
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
            <li className='sidebar_li'>
              <NavLink onClick={this.awaitAnimateOut} className='sidebar_link' to='/about' exact activeClassName='active'>
                About Me
            </NavLink>
            </li>
            <li className='sidebar_li'>
              <NavLink onClick={this.awaitAnimateOut} className='sidebar_link' to='/contact' exact activeClassName='active'>
                Contact
            </NavLink>
            </li>
            <a className='resume_container' href={resumePdf} target="_blank" rel="noopener noreferrer">
              <p>Resume (pdf)</p>
              <MdOpenInNew className='download_icon' />
            </a>
          </ul>
        </div>
        <div className='sidebar_overlay' onClick={this.animateOut} />
      </div>
    );
  }
}

export default withRouter(SideBar);