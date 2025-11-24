import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaJava,
  FaGit
} from "react-icons/fa";
import {
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiTailwindcss,
  SiDocker,
  SiR
} from "react-icons/si";

const iconMap = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJs />,
  Python: <FaPython />,
  "Node.js": <FaNodeJs />,
  React: <FaReact />,
  SQL: <FaDatabase />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Sequelize: <SiSequelize />,
  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  scikit: <SiScikitlearn />,
  Pandas: <SiPandas />,
  Numpy: <SiNumpy />,
  Tailwind: <SiTailwindcss />,
  Docker: <SiDocker />,
  R: <SiR />,
  Git: <FaGit />
};

export default function ProjectCard({ title, tech = [], img, link, description, logo }) {
  // Use a safe image fallback if provided img path doesn't resolve
  const imageSrc = img || "/vite.svg";

  return (
    <div className="project-card" role="article" aria-label={title}>
      <img src={imageSrc} alt={title} className="project-image" />

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tech" aria-hidden>
        {tech.map((t, i) => (
          <span key={i} className="tech-icon" title={t}>
            {iconMap[t] || t}
          </span>
        ))}
      </div>

      <div className="links" style={{ marginTop: "0.5rem" }}>
        <a
          className="btn btn-primary"
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
