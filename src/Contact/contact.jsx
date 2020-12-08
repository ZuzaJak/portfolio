import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>©2020, Zuzka Jakubčak </p>
      <div className="contact__links">
        <p>zuzkajakubcak@gmail.com</p>
        <a
          className="github_link"
          href="https://github.com/ZuzaJak"
          target="_blank"
        >
          <i class="github-contact fab fa-github"></i>
        </a>
      </div>
      <p className="contact-icons">
        icons by{' '}
        <a className="contact-icons" href="https://fontawesome.com/">
          Font Awesome
        </a>
      </p>
    </div>
  );
};

export default Contact;
