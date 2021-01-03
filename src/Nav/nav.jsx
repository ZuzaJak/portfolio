import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link className="logo" to="/index">
          Portfolio
        </Link>
      </div>
      <div className="nav__links">
        <Link className="nav-item" to="/index">
          about
        </Link>
        <Link className="nav-item" to="/projects">
          work
        </Link>
        {/*  <Link className="nav-item" to="/vyzkousej-to/1">
          pojď si zahrát
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
