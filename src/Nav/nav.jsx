import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <a href="#">
          <i class="fab fa-pagelines"></i>
        </a>
      </div>
      <div className="nav__links">
        <a className="nav__links-item" href="#main">
          about
        </a>
        <a className="nav__links-item" href="#">
          projects
        </a>
        <a className="nav__links-item" href="#">
          contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
