import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div id="contact" className="contact">
      <p>
        <i class="far fa-copyright"></i> 2021, Zuzana Jakubčak{' '}
      </p>
      <div className="contact__links">
        <CopyToClipboard
          text={'zuzkajakubcak@gmail.com'}
          onCopy={() => setCopied(true)}
        >
          <button className="copy-button">
            zuzkajakubcak@gmail.com <i class="far fa-copy"></i>
          </button>
        </CopyToClipboard>
        <div className="copied-div">
          {copied ? <span className="copied">copied!</span> : null}
        </div>
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
