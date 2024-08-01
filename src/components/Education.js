import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-container">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="card">
            <h3>California State University - Fullerton</h3>
            <h4>Master of Science in Computer Science</h4>
            <p>August 2022 – May 2024</p>
          </div>
          <div className="card">
            <h3>Gujarat Technological University, India</h3>
            <h4>Bachelor of Engineering in Computer Engineering</h4>
            <p>August 2016 – July 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
