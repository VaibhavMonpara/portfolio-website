import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="card">
            <h3>Midocean Technologies India</h3>
            <h4>Sr. Software Engineer (Jan 2022 – May 2022)</h4>
            <p>Led a project from initiation to completion post-client pitch, achieving timely delivery and a 15% boost in client satisfaction...</p>
          </div>
          <div className="card">
            <h3>Midocean Technologies India</h3>
            <h4>Jr. Software Engineer (Jan 2021 – Dec 2021)</h4>
            <p>Deployed a comprehensive Brass Manufacturing Module using Python, JavaScript, HTML, CSS, jQuery, XML, and integrated it with a Flutter mobile app...</p>
          </div>
          <div className="card">
            <h3>Midocean Technologies India</h3>
            <h4>Internship Trainee (Oct 2020 - Dec 2020)</h4>
            <p>Acquired practical Python proficiency, enabling creation of efficient and streamlined code for modules...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
