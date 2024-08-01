import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>Property Management System</h3>
            <p>
              Developed a comprehensive Property Management System using Python,
              JavaScript, and XML, integrated external APIs for real- time data
              retrieval, which improved property management efficiency by 40%.
              Streamlined reservation management and guest administration
              processes, accounting for 80% of system's functionality.
            </p>
          </div>
          <div className="card">
            <h3>E-commerce Website</h3>
            <p>
              Integrated a dynamic e-commerce website using the Django
              framework, enabling seamless product browsing, cart management,
              and order tracking, enhancing online shopping experience. 
              Optimized user interface and performance while ensuring robust
              security measures for safe transactions.
            </p>
          </div>
          <div className="card">
            <h3>Medi-kit</h3>
            <p>
              Co-developed Medi-kit, a web application with Django framework,
              focusing on features like pathology report management, a
              healthcare articles repository, and doctor-patient interactions,
              enhancing healthcare accessibility and communication. 
              Implemented backend functionalities with Python and designed
              frontend using HTML, CSS, and JavaScript, contributing to a
              user-friendly interface and seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
