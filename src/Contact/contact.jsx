import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>©2020, Zuzka Jakubčak</p>

      <div className="contact__links">
        <p>zuzkajakubcak@gmail.com</p>
        <a href="https://github.com/ZuzaJak" target="_blank">
          <i class="github fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
