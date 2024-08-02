import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <a href="#home">&lt;VNM/&gt;</a>
        </div>
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={650}>Home</Link></li>
            <li><Link to="experience" smooth={true} duration={650}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={650}>Projects</Link></li>
            <li><Link to="skills" smooth={true} duration={650}>Skills</Link></li>
            <li><Link to="education" smooth={true} duration={650}>Education</Link></li>
            <li><Link to="contact" smooth={true} duration={650}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
