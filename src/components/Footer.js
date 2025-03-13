import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Vaibhav Monpara. All Rights
          Reserved.
        </p>
        <p className="footer-note">Built with passion and precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
