import React from "react";

// ===== IMPORT ALL ICONS USED IN PROJECT DATA =====
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaJava
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiSequelize,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiR,
  SiRstudio,
  SiTidyverse,
  SiGgplot2,
  SiMysql
} from "react-icons/si";

// ===== MAP TECH STRINGS TO ICON COMPONENTS =====
const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaPython: <FaPython />,
  FaNodeJs: <FaNodeJs />,
  FaReact: <FaReact />,
  FaJava: <FaJava />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiSequelize: <SiSequelize />,
  SiTensorflow: <SiTensorflow />,
  SiKeras: <SiKeras />,
  SiPandas: <SiPandas />,
  SiNumpy: <SiNumpy />,
  SiScikitlearn: <SiScikitlearn />,
  SiR: <SiR />,
  SiRstudio: <SiRstudio />,
  SiTidyverse: <SiTidyverse />,
  SiGgplot2: <SiGgplot2 />,
  SiMysql: <SiMysql />
};

export default function ProjectCard({ title, tech, img, link, description }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      {/* TECH ICON SECTION */}
      <div className="project-tech">
        {tech.map((iconKey, i) => (
          <span key={i} className="tech-icon">
            {iconMap[iconKey] || iconKey}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
}
