import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via email or LinkedIn:</p>
        <p>
          <a href="mailto:vaibhav98patel@gmail.com">vaibhav98patel@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/vaibhav-monpara" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
