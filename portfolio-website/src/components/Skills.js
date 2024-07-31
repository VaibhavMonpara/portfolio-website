import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="card">
            <h3>Languages</h3>
            <p>Python, Java, C, C++, C#, ASP.NET, JavaScript, TypeScript, HTML, CSS</p>
          </div>
          <div className="card">
            <h3>Frameworks</h3>
            <p>Odoo, Django, Flask, Spring Boot, React.js, Node.js, jQuery, Flutter, Postman, Bootstrap</p>
          </div>
          <div className="card">
            <h3>Databases</h3>
            <p>PostgreSQL, SQL, SQLite, MongoDB, Firebase</p>
          </div>
          <div className="card">
            <h3>DevOps/Cloud/Tech</h3>
            <p>Git, GitHub, Figma, Docker, AWS, Linux, ERP, Windows, CI/CD, Jira, Slack, SDLC, Agile/SCRUM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
