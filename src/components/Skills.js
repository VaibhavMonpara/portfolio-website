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
              <div className="skill-item">
                <FaPython className="icon" />
                <div className="skill-name">Python</div>
              </div>
              <div className="skill-item">
                <FaJava className="icon" />
                <div className="skill-name">Java</div>
              </div>
              <div className="skill-item">
                <SiCplusplus className="icon" />
                <div className="skill-name">C++</div>
              </div>
              <div className="skill-item">
                <SiCsharp className="icon" />
                <div className="skill-name">C#</div>
              </div>
              <div className="skill-item">
                <SiHtml5 className="icon" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-item">
                <SiCss3 className="icon" />
                <div className="skill-name">CSS</div>
              </div>
              <div className="skill-item">
                <SiJavascript className="icon" />
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="skill-item">
                <SiTypescript className="icon" />
                <div className="skill-name">TypeScript</div>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h3>Frameworks</h3>
            <div className="skill-icons">
              <div className="skill-item">
                <SiOdoo className="icon" />
                <div className="skill-name">Odoo</div>
              </div>
              <div className="skill-item">
                <SiDjango className="icon" />
                <div className="skill-name">Django</div>
              </div>
              <div className="skill-item">
                <SiFlask className="icon" />
                <div className="skill-name">Flask</div>
              </div>
              <div className="skill-item">
                <SiSpringboot className="icon" />
                <div className="skill-name">Spring Boot</div>
              </div>
              <div className="skill-item">
                <SiReact className="icon" />
                <div className="skill-name">React</div>
              </div>
              <div className="skill-item">
                <FaNodeJs className="icon" />
                <div className="skill-name">Node.js</div>
              </div>
              <div className="skill-item">
                <SiJquery className="icon" />
                <div className="skill-name">jQuery</div>
              </div>
              <div className="skill-item">
                <SiFlutter className="icon" />
                <div className="skill-name">Flutter</div>
              </div>
              <div className="skill-item">
                <SiBootstrap className="icon" />
                <div className="skill-name">Bootstrap</div>
              </div>
              <div className="skill-item">
                <SiPostman className="icon" />
                <div className="skill-name">Postman</div>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h3>Databases</h3>
            <div className="skill-icons">
              <div className="skill-item">
                <SiPostgresql className="icon" />
                <div className="skill-name">PostgreSQL</div>
              </div>
              <div className="skill-item">
                <FaDatabase className="icon" />
                <div className="skill-name">SQL</div>
              </div>
              <div className="skill-item">
                <SiMongodb className="icon" />
                <div className="skill-name">MongoDB</div>
              </div>
              <div className="skill-item">
                <SiFirebase className="icon" />
                <div className="skill-name">Firebase</div>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h3>DevOps/Cloud/Tech</h3>
            <div className="skill-icons">
              <div className="skill-item">
                <FaAws className="icon" />
                <div className="skill-name">AWS</div>
              </div>
              <div className="skill-item">
                <FaGithub className="icon" />
                <div className="skill-name">GitHub</div>
              </div>
              <div className="skill-item">
                <FaDocker className="icon" />
                <div className="skill-name">Docker</div>
              </div>
              <div className="skill-item">
                <FaLinux className="icon" />
                <div className="skill-name">Linux</div>
              </div>
              <div className="skill-item">
                <SiFigma className="icon" />
                <div className="skill-name">Figma</div>
              </div>
              <div className="skill-item">
                <FaJira className="icon" />
                <div className="skill-name">Jira</div>
              </div>
              <div className="skill-item">
                <FaSlack className="icon" />
                <div className="skill-name">Slack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
