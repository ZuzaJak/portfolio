import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './contact.css';

const Contact = () => {
  const [textValue, setTextValue] = useState('zuzkajakubcak@gmail.com');
  return (
    <div id="contact" className="contact">
      <p>© 2021, Zuzana Jakubčak </p>
      <div className="contact__links">
        <CopyToClipboard text={textValue}>
          <button
            className="copy-button"
            value="textValue"
            onClick={(e) => {
              setTextValue(`zuzkajakubcak@gmail.com ➤ copied!`);
              e.target.style.color = '#f76e48';
            }}
          >
            {textValue}
          </button>
        </CopyToClipboard>
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
        <p className="contact-icons-flexitem">
          {' '}
          icons by{' '}
          <a href="https://fontawesome.com/" target="_blank">
            Font Awesome
          </a>
        </p>
        <p className="contact-icons-flexitem">
          background design by{' '}
          <a href="https://www.freepik.com/vectors/background" target="_blank">
            freepik
          </a>
        </p>
      </p>
    </div>
  );
};

export default Contact;
