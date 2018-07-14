import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink className='link' to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/about' exact activeClassName='active'>
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
