import React from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to new opportunities and collaborations. Reach out
          via:
        </p>
        <div className="contact-links">
          <a
            href="mailto:vaibhav98patel@gmail.com"
            aria-label="Email Vaibhav"
            className="contact-item"
          >
            <FaEnvelope className="contact-icon" />
            <span>vaibhav98patel@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-monpara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
