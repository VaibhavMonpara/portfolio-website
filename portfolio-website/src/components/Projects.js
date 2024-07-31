import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>Property Management System</h3>
            <p>Developed a comprehensive Property Management System using Python, JavaScript, and XML...</p>
          </div>
          <div className="card">
            <h3>E-commerce Website</h3>
            <p>Integrated a dynamic e-commerce website using the Django framework...</p>
          </div>
          <div className="card">
            <h3>Medi-kit</h3>
            <p>Co-developed Medi-kit, a web application with Django framework, focusing on features like pathology report management...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
