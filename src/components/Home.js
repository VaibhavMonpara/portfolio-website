import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <img
          src={profileImage}
          alt="Vaibhav Monpara"
          className="profile-image"
          loading="lazy"
        />
        <h1>Vaibhav Monpara</h1>
        <h2 className="subtitle">
          Software Engineer | Problem Solver | Tech Enthusiast
        </h2>
        <p className="home-data">
          Software engineer by day, bug hunter by night. Fueled by chai, code,
          and an uncanny ability to turn caffeine into features.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vaibhav-monpara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/VaibhavMonpara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://x.com/VaibhavMonpara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <SiX className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
