import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

library.add(faPhone , faEnvelope);

function Contact() {
  return (
    <section className="Contact skills-container" id="contact">
      <h1 >Let's work together</h1>
      <div className="content">
        <div className="card">
          <div className="iconcontact" >
            <FontAwesomeIcon icon={faPhone}   />
          </div>
          <div className="info">
            <h3>Phone</h3>
            <p>+216 50514247</p>
          </div>
        </div>
        <div className="card">
          <div className="iconcontact">
            <FontAwesomeIcon icon={faEnvelope}  />
          </div>
          <div className="info">
            <h3>Email</h3>
            <p>ammardalel07@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
