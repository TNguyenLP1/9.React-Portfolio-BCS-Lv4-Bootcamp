import { FaPython, FaReact, FaNodeJs, FaDatabase, FaProjectDiagram, FaToolbox, FaClipboardList, FaLaptopCode, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";
import { SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiSqlite, SiPostgresql, SiMongodb, SiGit, SiDocker, SiR } from "react-icons/si";

const industrialSkills = [
  {
    category: "Technical — Data Engineering & Analytics",
    skills: [
      { name: "Python (pandas, numpy)", proficiency: "Advanced", icon: FaPython },
      { name: "R / Tidyverse / ggplot2", proficiency: "Intermediate", icon: SiR },
      { name: "SQL (Sequelize / Postgres / MySQL)", proficiency: "Advanced", icon: FaDatabase },
      { name: "ETL & Data Wrangling", proficiency: "Advanced", icon: FaToolbox },
      { name: "Data Visualisation (Tableau / Power BI / matplotlib)", proficiency: "Advanced", icon: FaChartLine },
      { name: "Jupyter Notebooks / RStudio", proficiency: "Advanced", icon: FaLaptopCode },
      { name: "Data Ethics & Governance", proficiency: "Intermediate", icon: FaShieldAlt }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Supervised Learning (regression, classification)", proficiency: "Advanced", icon: SiScikitlearn },
      { name: "Unsupervised Learning (clustering)", proficiency: "Advanced", icon: SiScikitlearn },
      { name: "Deep Learning (CNNs, ANN)", proficiency: "Advanced", icon: SiTensorflow },
      { name: "TensorFlow / Keras", proficiency: "Advanced", icon: SiKeras },
      { name: "NLP (TF-IDF, tokenisation, sentiment analysis)", proficiency: "Advanced", icon: FaLaptopCode },
      { name: "Model Selection, Tuning & Pipelines (GridSearchCV, CV)", proficiency: "Advanced", icon: FaProjectDiagram }
    ]
  },
  {
    category: "Full-Stack & Software Engineering",
    skills: [
      { name: "React (component architecture, hooks)", proficiency: "Advanced", icon: FaReact },
      { name: "Node.js & Express (APIs, middleware)", proficiency: "Advanced", icon: FaNodeJs },
      { name: "REST API design and integration", proficiency: "Advanced", icon: FaClipboardList },
      { name: "Authentication & Security (hashing, sessions, JWT)", proficiency: "Intermediate", icon: FaShieldAlt },
      { name: "Version control (Git / GitHub)", proficiency: "Advanced", icon: SiGit },
      { name: "Containers & Dev tooling (Docker)", proficiency: "Intermediate", icon: SiDocker }
    ]
  },
  {
    category: "Operational & Manufacturing Skills",
    skills: [
      { name: "Project Management (SDCA, TPM)", proficiency: "Advanced", icon: FaProjectDiagram },
      { name: "Lean Management / Continuous Improvement (NCE principles)", proficiency: "Advanced", icon: FaToolbox },
      { name: "HSE / SHE compliance & GMP/GLP", proficiency: "Advanced", icon: FaShieldAlt },
      { name: "Quality Assurance & Control (CIL standards, audits)", proficiency: "Advanced", icon: FaClipboardList },
      { name: "Performance Acceleration (data-driven process improvement)", proficiency: "Advanced", icon: FaChartLine }
    ]
  },
  {
    category: "Business, Communication & Leadership",
    skills: [
      { name: "Stakeholder Management & Cross-functional Leadership", proficiency: "Advanced", icon: FaUsers },
      { name: "Report / Grant Writing & Scientific Communication", proficiency: "Advanced", icon: FaClipboardList },
      { name: "Client liaison & commercial reporting", proficiency: "Advanced", icon: FaUsers },
      { name: "Coaching, Training & Capability Building", proficiency: "Advanced", icon: FaUsers }
    ]
  },
  {
    category: "Specialist Laboratory & Research Tools",
    skills: [
      { name: "Material characterisation (AFM, SEM, TEM, FTIR, Raman)", proficiency: "Advanced", icon: FaToolbox },
      { name: "Analytical instrumentation & HPLC experience", proficiency: "Advanced", icon: FaToolbox },
      { name: "Experimental design & statistical analysis", proficiency: "Advanced", icon: FaChartLine }
    ]
  },
  {
    category: "Certifications & Memberships",
    skills: [
      { name: "Associate Member – Royal Society of Chemistry", proficiency: "Verified", icon: FaClipboardList },
      { name: "Associate Member – Royal Society of Biology", proficiency: "Verified", icon: FaClipboardList },
      { name: "BASIS Professional Register", proficiency: "Verified", icon: FaClipboardList },
      { name: "Intermediate Level Food Safety", proficiency: "Verified", icon: FaClipboardList }
    ]
  }
];

export default industrialSkills;
