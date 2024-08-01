import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/profile-image.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Hi, I'm Vaibhav Monpara</h1>
        <p className='home-data'>Software engineer by day, bug hunter by night. Fueled by chai, code, and an uncanny ability to turn caffeine into features. Ready to debug the universe!</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vaibhav-monpara" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VaibhavMonpara" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://x.com/VaibhavMonpara" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiX />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
