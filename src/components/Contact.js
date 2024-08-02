import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via email or LinkedIn:</p>
        <div className="contact-links">
          <a href="mailto:vaibhav98patel@gmail.com" aria-label="Email">
            <FaEnvelope className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-monpara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
