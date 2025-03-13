import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Energy Consumption & Sustainability Analytics",
      description:
        "Built a data-driven dashboard to analyze renewable energy trends and provide sustainability insights using Python and Plotly Dash.",
      skills: [
        "Python",
        "Dash",
        "Matplotlib",
        "Seaborn",
        "Pandas",
        "Scikit-learn",
      ],
      github: "https://github.com/VaibhavMonpara/ecsa-project",
    },
    {
      title: "Property Management System",
      description:
        "Created an efficient property management solution with real-time API integrations, boosting productivity by 40%.",
      skills: ["Python", "PostgreSQL", "JavaScript", "Odoo", "XML", "APIs"],
      github: "https://github.com/VaibhavMonpara/pms",
    },
    {
      title: "E-commerce Platform",
      description:
        "Developed a full-featured e-commerce site with Django, including cart management and order tracking for an enhanced user experience.",
      skills: ["Python", "SQLite", "Django", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/VaibhavMonpara/MyAwesomeCart",
    },
    {
      title: "Medi-kit Healthcare System",
      description:
        "Co-developed a healthcare platform for report management and doctor-patient communication, improving accessibility.",
      skills: ["Python", "MySQL", "Django", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/VaibhavMonpara",
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills-used">
                {project.skills.map((skill, idx) => (
                  <span className="skill-badge" key={idx}>
                    {skill}
                  </span>
                ))}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub for ${project.title}`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
