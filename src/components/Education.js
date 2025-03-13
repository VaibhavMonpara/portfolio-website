import React from "react";
import "../styles/Education.css";
import CSUFullertonLogo from "../assets/csuf-logo.png";
import GTULogo from "../assets/gtu-logo.png";

const Education = () => {
  const education = [
    {
      institution: "California State University - Fullerton",
      degree: "Master's in Computer Science",
      period: "Aug 2022 – May 2024",
      link: "https://www.fullerton.edu/",
      logo: CSUFullertonLogo,
    },
    {
      institution: "Gujarat Technological University, India",
      degree: "Bachelor's in Computer Engineering",
      period: "Aug 2016 – Jul 2020",
      link: "https://www.gtu.ac.in/",
      logo: GTULogo,
    },
  ];

  return (
    <section id="education" className="education-container">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="card" key={index}>
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${edu.institution}`}
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="logo"
                  loading="lazy"
                />
              </a>
              <h3>{edu.institution}</h3>
              <h4 className="degree">{edu.degree}</h4>
              <p>{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
