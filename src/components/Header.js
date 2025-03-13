import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <Link to="home" smooth={true} duration={650} onClick={closeMenu}>
            &lt;VNM/&gt;
          </Link>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {[
              "home",
              "experience",
              "projects",
              "skills",
              "education",
              "contact",
            ].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={650}
                  onClick={closeMenu}
                  activeClass="active"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
