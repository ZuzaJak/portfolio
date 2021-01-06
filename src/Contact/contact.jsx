import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <p>© 2021, Zuzana Jakubčak </p>
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
        , background design by{' '}
        <a
          className="contact-icons"
          href="<a href='https://www.freepik.com/vectors/background'>Background vector created by VecMes - www.freepik.com</a>"
        >
          freepik
        </a>
      </p>
    </div>
  );
};

export default Contact;
