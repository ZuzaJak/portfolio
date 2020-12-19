import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>©2020, Zuzana Jakubčak </p>
      <div className="contact__links">
        <p>zuzkajakubcak@gmail.com</p>
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
