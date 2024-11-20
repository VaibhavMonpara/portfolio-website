import React, { useState, useEffect } from "react";
import "../styles/Experience.css";
import midoceanLogo from "../assets/midocean-logo.png";
import aklogo from "../assets/logo.jpg";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      company: "Airkitchenz Inc",
      position: "Co-Founder &Software Engineer",
      period: "August 2024 – Present",
      description:
        "As a Co-Founder and Software Engineer, I am transforming the food industry through technology by developing an innovative kitchen rental platform. I have spearheaded the project from its inception, designing and implementing a robust system using React for the frontend and Node.js with Express for the backend. Leveraging AWS services such as EC2, DynamoDB, S3, and Route 53, I ensured seamless scalability, performance, and reliability. This platform connects entrepreneurs with kitchen spaces, empowering food businesses to grow efficiently.",
      link: "https://airkitchenz.com",
      logo: aklogo,
    },
    {
      company: "Midocean Technologies",
      position: "Software Engineer",
      period: "Jan 2022 – May 2022",
      description:
        "Led a project from initiation to completion post-client pitch, achieving timely delivery and a 15% boost in client satisfaction. Developed and implemented a new software feature that optimized client workflow, resulting in a 20% efficiency increase. Collaborated with cross-functional teams to identify and resolve system issues, enhancing overall system reliability.",
      link: "https://www.midocean.tech",
      achievements: [
        "Led development of key features resulting in 20% efficiency increase",
        "Managed cross-functional team collaboration",
        "Implemented automated testing reducing bugs by 30%"
      ],
      logo: midoceanLogo,
    },
    {
      company: "Midocean Technologies",
      position: "Jr. Software Engineer",
      period: "Jan 2021 – Dec 2021",
      description:
        "Deployed a comprehensive Brass Manufacturing Module using Python, JavaScript, HTML, CSS, jQuery, XML, and integrated it with a Flutter mobile app. Developed an ERP system for inventory and order management, improving the client’s operational efficiency by 30%. Provided ongoing maintenance and troubleshooting for existing software solutions.",
      link: "https://www.midocean.tech",
      logo: midoceanLogo,
    },
    {
      company: "Midocean Technologies",
      position: "Internship",
      period: "Oct 2020 - Dec 2020",
      description:
        "Acquired practical Python proficiency, enabling creation of efficient and streamlined code for modules. Assisted senior engineers in developing and testing new software features, contributing to the successful launch of several key projects. Participated in weekly code reviews, receiving constructive feedback and improving coding skills.",
      link: "https://www.midocean.tech",
      logo: midoceanLogo,
    },
  ];

  const openModal = (experience) => {
    setModalContent(experience);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({});
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="experience" className="experience-container">
      <div className="experience-content">
        <h2>WORK EXPERIENCE</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <img src={exp.logo} alt={exp.company} />
                </a>
              </div>
              <div 
                className="timeline-content"
                role="article"
                aria-label={`${exp.position} at ${exp.company}`}
              >
                <h3>{exp.position}</h3>
                <h4>{exp.period}</h4>
                {isMobile ? (
                  // Full content for mobile
                  <>
                    <p>{exp.description}</p>
                    {exp.achievements && (
                      <div className="achievements-mobile">
                        <h4>Key Achievements:</h4>
                        <ul>
                          {exp.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  // Truncated content with modal for desktop
                  <p>
                    {exp.description.slice(0, 95)}...{" "}
                    <button 
                      onClick={() => openModal(exp)} 
                      className="read-more"
                      aria-label={`Read more about ${exp.position} role`}
                    >
                      Read more
                    </button>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && modalOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="modal-title">{modalContent.position}</h3>
            <h4>{modalContent.period}</h4>
            <p>{modalContent.description}</p>
            {modalContent.achievements && (
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {modalContent.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
