import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink className='link' to='/' exact activeClassName='active'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/about' exact activeClassName='active'>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/resume' exact activeClassName='active'>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/contact' exact activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
