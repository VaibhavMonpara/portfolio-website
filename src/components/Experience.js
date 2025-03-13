import React, { useEffect, useState } from "react";
import "../styles/Experience.css";
import midoceanLogo from "../assets/midocean-logo.png";
import aklogo from "../assets/logo.png";

const Experience = () => {
  const experiences = [
    {
      company: "Airkitchenz Inc",
      position: "Co-Founder & Lead Engineer",
      period: "Aug 2024 – Present",
      description: ["On a mission to revolutionize the food industry."],
      link: "https://airkitchenz.com",
      logo: aklogo,
    },
    {
      company: "Midocean Technologies",
      position: "Sr. Software Engineer",
      period: "Oct 2020 – May 2022",
      link: "https://www.midocean.tech",
      logo: midoceanLogo,
      journey: [
        {
          role: "Sr. Software Engineer",
          period: "Jan 2022 – May 2022",
          description: [
            "Led a project from initiation to completion post-client pitch, achieved timely delivery and a 15% boost in client satisfaction.",
            "Played a pivotal role in sprint planning, retrospectives, and daily stand-ups, ensuring efficient project execution and delivery.",
            "Guided and coached a team of junior developers, imparting best practices and collaborating on project development; improved code quality and decreased bug resolution time by 30%.",
          ],
        },
        {
          role: "Jr. Software Engineer",
          period: "Jan 2021 – Dec 2021",
          description: [
            "Deployed a comprehensive Brass Manufacturing Module using Python, JavaScript, HTML, CSS, jQuery, XML, and integrated it with a Flutter mobile app, increasing operational efficiency by 25% and reduced manual reporting.",
            "Created a Telegram bot for trading operations with APIs and Python, and designed an admin dashboard, leading to a 40% increase in trade execution speed and reduced administrative workload.",
            "Programmed a robust shipment tracking system with Python, JavaScript, and APIs, achieved a significant improvement in package tracking accuracy and a 20% boost in customer satisfaction through real-time updates.",
            "Built a system for solar panel installations using Python, JavaScript, HTML, CSS, and Flutter, providing video/photo verification, and reducing post-installation inspections by 50%.",
          ],
        },
        {
          role: "Internship",
          period: "Oct 2020 – Dec 2020",
          description: [
            "Acquired practical Python proficiency, enabling creation of efficient and streamlined code for modules.",
            "Engaged in Agile development practices by participating in sprint planning and daily stand-ups, ensuring project alignment and progress tracking.",
            "Received mentoring from team leads and senior developers, embracing best practices and fostering personal and professional growth.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience-container">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="card-header">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="card-logo"
                  loading="lazy"
                />
                <div className="card-info">
                  <h3>{exp.position}</h3>
                  <h4>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>{" "}
                    • {exp.period}
                  </h4>
                </div>
              </div>
              <div className="card-details">
                {exp.description ? (
                  <ul className="description-list">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="journey-container">
                    {exp.journey.map((stage, idx) => (
                      <div className="journey-stage" key={idx}>
                        <div className="journey-header">
                          <h5>{stage.role}</h5>
                          <span>{stage.period}</span>
                        </div>
                        <ul className="description-list">
                          {stage.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
