import React from "react";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaLinux,
  FaJira,
  FaSlack,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiPostgresql,
  SiFirebase,
  SiSpringboot,
  SiDjango,
  SiReact,
  SiJquery,
  SiFlutter,
  SiBootstrap,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiOdoo,
  SiFigma,
  SiFlask,
  SiPostman,
  SiMongodb
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skill-icons">
              <FaPython className="icon" />
              <FaJava className="icon" />
              <SiCplusplus className="icon" />
              <SiCsharp className="icon" />
              <SiHtml5 className="icon" />
              <SiCss3 className="icon" />
              <SiJavascript className="icon" />
              <SiTypescript className="icon" />
            </div>
          </div>
          <div className="skills-category">
            <h3>Frameworks</h3>
            <div className="skill-icons">
              <SiOdoo className="icon" />
              <SiDjango className="icon" />
              <SiFlask className="icon" />
              <SiSpringboot className="icon" />
              <SiReact className="icon" />
              <FaNodeJs className="icon" />
              <SiJquery className="icon" />
              <SiFlutter className="icon" />
              <SiBootstrap className="icon" />
              <SiPostman className="icon" />
            </div>
          </div>
          <div className="skills-category">
            <h3>Databases</h3>
            <div className="skill-icons">
              <SiPostgresql className="icon" />
              <FaDatabase className="icon" />
              {/* <FaDatabase className="icon" /> */}
              <SiMongodb className="icon" />
              <SiFirebase className="icon" />
            </div>
          </div>
          <div className="skills-category">
            <h3>DevOps/Cloud/Tech</h3>
            <div className="skill-icons">
              <FaAws className="icon" />
              <FaGithub className="icon" />
              <FaDocker className="icon" />
              <FaLinux className="icon" />
              <SiFigma className="icon" />
              <FaJira className="icon" />
              <FaSlack className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
