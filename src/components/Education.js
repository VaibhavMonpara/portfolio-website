import React from 'react';
import '../styles/Education.css';

import CSUFullertonLogo from '../assets/csuf-logo.png';
import GTULogo from '../assets/gtu-logo.png';

const Education = () => {
  return (
    <section id="education" className="education-container">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="card">
            <a href="https://www.fullerton.edu/" target="_blank" rel="noopener noreferrer">
              <img src={CSUFullertonLogo} alt="California State University - Fullerton Logo" className="logo" />
            </a>
            <h3>California State University - Fullerton</h3>
            <h4 className="degree">Master's in Computer Science</h4>
            <p>August 2022 – May 2024</p>
          </div>
          <div className="card">
            <a href="https://www.gtu.ac.in/" target="_blank" rel="noopener noreferrer">
              <img src={GTULogo} alt="Gujarat Technological University Logo" className="logo" />
            </a>
            <h3>Gujarat Technological University, India</h3>
            <h4 className="degree">Bachelor's in Computer Engineering</h4>
            <p>August 2016 – July 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
