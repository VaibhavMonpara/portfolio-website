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
  SiMongodb,
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: FaPython, name: "Python" },
        { icon: FaJava, name: "Java" },
        { icon: SiCplusplus, name: "C++" },
        { icon: SiCsharp, name: "C#" },
        { icon: SiHtml5, name: "HTML" },
        { icon: SiCss3, name: "CSS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { icon: SiOdoo, name: "Odoo" },
        { icon: SiDjango, name: "Django" },
        { icon: SiFlask, name: "Flask" },
        { icon: SiSpringboot, name: "Spring Boot" },
        { icon: SiReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiJquery, name: "jQuery" },
        { icon: SiFlutter, name: "Flutter" },
        { icon: SiBootstrap, name: "Bootstrap" },
        { icon: SiPostman, name: "Postman" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: FaDatabase, name: "SQL" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiFirebase, name: "Firebase" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { icon: FaAws, name: "AWS" },
        { icon: FaGithub, name: "GitHub" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaLinux, name: "Linux" },
        { icon: SiFigma, name: "Figma" },
        { icon: FaJira, name: "Jira" },
        { icon: FaSlack, name: "Slack" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skill-icons">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <skill.icon className="icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
