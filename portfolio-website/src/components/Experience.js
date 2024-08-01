import React, { useState } from "react";
import "../styles/Experience.css";
import midoceanLogo from "../assets/midocean-logo.png"; // Ensure this path is correct

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const experiences = [
    {
      company: "Midocean Technologies",
      position: "Software Engineer",
      period: "Jan 2022 – May 2022",
      description:
        "Led a project from initiation to completion post-client pitch, achieving timely delivery and a 15% boost in client satisfaction. Developed and implemented a new software feature that optimized client workflow, resulting in a 20% efficiency increase. Collaborated with cross-functional teams to identify and resolve system issues, enhancing overall system reliability.",
      link: "https://www.midocean.tech",
    },
    {
      company: "Midocean Technologies",
      position: "Jr. Software Engineer",
      period: "Jan 2021 – Dec 2021",
      description:
        "Deployed a comprehensive Brass Manufacturing Module using Python, JavaScript, HTML, CSS, jQuery, XML, and integrated it with a Flutter mobile app. Developed an ERP system for inventory and order management, improving the client’s operational efficiency by 30%. Provided ongoing maintenance and troubleshooting for existing software solutions.",
      link: "https://www.midocean.tech",
    },
    {
      company: "Midocean Technologies",
      position: "Internship Trainee",
      period: "Oct 2020 - Dec 2020",
      description:
        "Acquired practical Python proficiency, enabling creation of efficient and streamlined code for modules. Assisted senior engineers in developing and testing new software features, contributing to the successful launch of several key projects. Participated in weekly code reviews, receiving constructive feedback and improving coding skills.",
      link: "https://www.midocean.tech",
    },
  ];

  const openModal = (experience) => {
    setModalContent(experience);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({});
  };

  return (
    <section id="experience" className="experience-container">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  <img src={midoceanLogo} alt={exp.company} />
                </a>
              </div>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.period}</h4>
                <p>{exp.description.slice(0, 100)}...</p>
                <button onClick={() => openModal(exp)} className="read-more">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalContent.position}</h3>
            <h4>{modalContent.period}</h4>
            <p>{modalContent.description}</p>
            <button className="modal-close" onClick={closeModal}>
              <button
                className="modal-close"
                onClick={closeModal}
              >
                &times;
              </button>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
