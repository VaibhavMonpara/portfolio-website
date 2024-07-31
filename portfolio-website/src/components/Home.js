import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/profile-image.jpg'; // Ensure this path is correct

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Hi, I'm Vaibhav Monpara</h1>
        <p>Software Engineer based in Los Angeles, CA</p>
        <a href="https://www.linkedin.com/in/vaibhav-monpara" target="_blank" rel="noopener noreferrer" className="btn">Connect on LinkedIn</a>
      </div>
    </section>
  );
};

export default Home;
