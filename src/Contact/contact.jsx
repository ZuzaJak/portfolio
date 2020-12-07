import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>©2020, Zuzka Jakubčak</p>
      <p>zuzkajakubcak@gmail.com</p>
      <div className="contact__links">
        <a href="https://github.com/ZuzaJak" target="_blank">
          <i class="github fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
