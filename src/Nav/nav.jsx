import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <a className="logo" href="#">
          Portfolio
        </a>
      </div>
      <div className="nav__links">
        <a
          className="nav_link"
          href="https://github.com/ZuzaJak"
          target="_blank"
        >
          <i class="nav-contact fab fa-github"></i>
        </a>
        <a
          className="nav_link"
          href="https://www.linkedin.com/in/zuzana-jakubcakova/"
          target="_blank"
        >
          <i class="nav-contact fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Nav;
