import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/PageNotFound.scss";

class PageNotFound extends React.Component {
  render () {
    return (
      <div className="container">
        <h2 className="error-title">404</h2>
        <p className="error-subtitle">Page Not Found</p>
        <NavLink className='error-action' to='/' exact>
          Back Home
        </NavLink>
      </div>
    );
  }
}

export default PageNotFound;
