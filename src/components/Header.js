import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <a href="#home">&lt;VNM/&gt;</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={isMenuOpen ? 'open' : ''}>
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
