import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>Property Management System</h3>
            <p>
              Developed a Property Management System using Python, JavaScript,
              and XML. Integrated external APIs for real-time data retrieval,
              improving management efficiency by 40%.
            </p>
            <div className="skills-used">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">Odoo</span>
              <span className="skill-badge">XML</span>
              <span className="skill-badge">APIs</span>
              <a
                href="https://github.com/VaibhavMonpara/pms"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="card">
            <h3>E-commerce Website</h3>
            <p>
              Built a dynamic e-commerce website using Django. Features include
              product browsing, cart management, and order tracking, enhancing
              the shopping experience.
            </p>
            <div className="skills-used">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">SQLite</span>
              <span className="skill-badge">Django</span>
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">JavaScript</span>
              <a
                href="https://github.com/VaibhavMonpara/MyAwesomeCart"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="card">
            <h3>Medi-kit</h3>
            <p>
              Co-developed Medi-kit, focusing on pathology report management,
              healthcare articles, and doctor-patient interactions. Enhanced
              accessibility and communication in healthcare.
            </p>
            <div className="skills-used">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">Django</span>
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">JavaScript</span>
              <a
                href="https://github.com/VaibhavMonpara"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
