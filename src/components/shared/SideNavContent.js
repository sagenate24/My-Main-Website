import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { navContent } from '../../utils/Data';
import * as resumePdf from '../../Images/Resume/NathanSageResume.pdf'
import { MdOpenInNew } from 'react-icons/md';
import { scrollToElement } from '../../utils/helpers';
import '../../styles/SideNavContent.scss'

class SideNavContent extends Component {
  constructor() {
    super();

    this.dropDown = React.createRef();
    this.hyperUl = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  state = {
    currentOpenElem: null
  }

  handleDropDown(e) {
    const content = navContent.filter(content => content.id === e.target.id);
    const height = content[0].subLinks.length * 35;

    const dropDownUL = document.querySelector(`.${e.target.id}`);
    const currentOpenElem = this.state.currentOpenElem;

    if (dropDownUL.style.height === '0px') {
      e.target.style.transform = 'rotate(180deg)';
      dropDownUL.style.height = `${height}px`;
    } else {
      e.target.style.transform = 'rotate(0deg)';
      dropDownUL.style.height = `0px`;
    }

    if (
      currentOpenElem !== null &&
      currentOpenElem.id !== e.target.id &&
      document.querySelector(`.${currentOpenElem.id}`).style.height !== '0px'
    ) {
      currentOpenElem.style.transform = 'rotate(0deg)';
      document.querySelector(`.${currentOpenElem.id}`).style.height = `0px`;
    }

    this.setState({ currentOpenElem: e.target });
  }

  handleHyperLinks = (elemId) => {
    if (window.location.pathname === '/') {
      scrollToElement(elemId, -80);
    } else if (
      window.location.pathname === '/about' ||
      window.location.pathname === '/about/'
    ) {
      scrollToElement(elemId, -50);
    }
  }

  routeChangeWithoutHas = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ul className="side-nav__content">
        {navContent.map(item => (
          <Fragment key={item.id}>
            <li>
              <NavLink onClick={this.routeChangeWithoutHas} className='sidebar_link' to={item.pathName} exact activeClassName='active'>
                {item.title}
              </NavLink>
              {item.subLinks && (
                <div id={item.id} ref={this.dropDown} onClick={this.handleDropDown} className='sidebar_arrow_down' />
              )}
            </li>
            {item.subLinks && (
              <ul ref={this.hyperUl} style={{ height: '0px' }} className={`sidebar_hyper_ul ${item.id}`}>
                {item.subLinks.map(link => (
                  <li key={link.id}>
                    <NavLink
                      onClick={() => this.handleHyperLinks(link.id)}
                      className='hyper_link'
                      to={
                        item.id === 'home'
                          ? `/#${link.id}`
                          : `/about/#${link.id}`
                      }
                      exact
                      activeClassName='active'
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
        <li>
          <a className='resume_container' href={resumePdf} target="_blank" rel="noopener noreferrer">
            <p>Resume</p>
          </a>
          <MdOpenInNew
          onClick={() => this.props.openLink(resumePdf)}
          className='download_icon'
          />
        </li>
      </ul>
    )
  }
}

export default SideNavContent;
