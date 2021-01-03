import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>©2020, Zuzana Jakubčak </p>
      <div className="contact__links">
        <p>zuzkajakubcak@gmail.com</p>
        <div>
          <a
            className="contact_links-icon"
            href="https://github.com/ZuzaJak"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            className="contact_links-icon"
            href="https://www.linkedin.com/in/zuzana-jakubcakova/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
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
