import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdMail, IoLogoGithub, IoLogoLinkedin, IoMdClose } from 'react-icons/io'
import { Events } from 'react-scroll';
import '../styles/NavBar.scss';

import SideNavContent from './shared/SideNavContent';

class NavBar extends Component {
  constructor() {
    super();
    this.sideNavEl = React.createRef();
    this.sideNavContainerEl = React.createRef();

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.update = this.update.bind(this);

    this.startX = 0;
    this.currentX = 0;
    this.touchingSideNav = false;

    this.transitionEndProperty = null;
    this.transitionEndTime = 0;
  }

  update = () => {
    if (!this.touchingSideNav)
      return;

    requestAnimationFrame(this.update);

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.current.style.transform = `translateX(${translateX}px)`;
  }

  blockClicks(evt) {
    evt.stopPropagation();
  }

  onTransitionEnd(evt) {
    if (evt.propertyName !== this.transitionEndProperty && evt.elapsedTime !== this.transitionEndTime) {
      return;
    }

    this.transitionEndProperty = null;
    this.transitionEndTime = 0;

    this.sideNavEl.current.classList.remove('side-nav--animatable');
    this.sideNavEl.current.removeEventListener('transitionend', this.onTransitionEnd);
  }

  showSideNav() {
    this.sideNavEl.current.classList.add('side-nav--animatable');
    this.sideNavEl.current.classList.add('side-nav--visible');

    this.transitionEndProperty = 'transform';
    // the duration of transition (make unique to distinguish transitions )
    this.transitionEndTime = 0.33;

    this.sideNavEl.current.addEventListener('transitionend', this.onTransitionEnd);

    Events.scrollEvent.register('end', () => {
      this.hideSideNav();
    });
  }

  hideSideNav() {
    this.sideNavEl.current.classList.add('side-nav--animatable');
    this.sideNavEl.current.classList.remove('side-nav--visible');

    this.transitionEndProperty = 'transform';
    this.transitionEndTime = 0.13;

    this.sideNavEl.current.addEventListener('transitionend', this.onTransitionEnd);
  }

  render() {
    return (
      <div className='nav_container' >
        <IoMdMenu
          onClick={this.showSideNav}
          className='nav_logo first_logo' />
        <NavLink className='nav_title_container nav_title' to='/' exact>
          <h2 className='nav_title'>Nathan Sage</h2>
        </NavLink>
        <IoLogoGithub className='nav_logo last_logo' onClick={() => this.props.openLink('https://github.com/sagenate24')} />
        <NavLink to='/contact' aria-label='Link To Contact Page' exact><IoMdMail className='nav_logo last_logo' /></NavLink>
        <IoLogoLinkedin className='nav_logo last_logo' onClick={() => this.props.openLink('https://www.linkedin.com/in/nathan-sage-689296163/')} />

        <aside
          onClick={this.hideSideNav}
          ref={this.sideNavEl}
          className="js-side-nav side-nav">
          <nav
            onClick={this.blockClicks}
            ref={this.sideNavContainerEl}
            className="js-side-nav-container side-nav__container">
            <IoMdClose
              onClick={this.hideSideNav}
              className='nav_logo first_logo side-nav__hide' />
            <h3 className="side-nav__header">Front End Developer</h3>
            <SideNavContent
              openLink={(href) => this.props.openLink(href)}
              hideSideNav={this.hideSideNav}
            />
          </nav>
        </aside>
      </div>
    );
  }
}

export default NavBar;
