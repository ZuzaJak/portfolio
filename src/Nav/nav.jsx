import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <NavLink activeClassName="is-active" className="nav-item" to="/index">
          about
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="is-active"
          to="/projects"
        >
          work
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
