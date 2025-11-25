import { 
  FaPython, FaReact, FaNodeJs, FaDatabase, FaProjectDiagram,
  FaToolbox, FaLaptopCode, FaChartLine, FaUsers, FaShieldAlt,
  FaFlask, FaCogs, FaCertificate, FaClipboardList
} from "react-icons/fa";
import { 
  SiTensorflow, SiKeras, SiScikitlearn, SiR, SiGit, SiDocker
} from "react-icons/si";

const industrialSkills = [
  {
    category: "Technical — Data Engineering & Analytics",
    skills: [
      { name: "Python (pandas, numpy)", summary: "Data analysis automation", icon: FaPython },
      { name: "R / Tidyverse / ggplot2", summary: "Statistical modelling visualisation", icon: SiR },
      { name: "SQL (Sequelize / Postgres / MySQL)", summary: "Database query management", icon: FaDatabase },
      { name: "ETL & Data Wrangling", summary: "Extract transform load", icon: FaCogs },
      { name: "Data Visualisation (Tableau / Power BI / matplotlib)", summary: "Charts dashboards insights", icon: FaChartLine },
      { name: "Jupyter Notebooks / RStudio", summary: "Interactive coding environment", icon: FaLaptopCode },
      { name: "Data Ethics & Governance", summary: "Responsible data practices", icon: FaShieldAlt }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Supervised Learning (regression, classification)", summary: "Predictive model training", icon: SiScikitlearn },
      { name: "Unsupervised Learning (clustering)", summary: "Pattern discovery grouping", icon: FaProjectDiagram },
      { name: "Deep Learning (CNNs, ANN)", summary: "Neural network modelling", icon: SiTensorflow },
      { name: "TensorFlow / Keras", summary: "Framework model building", icon: SiKeras },
      { name: "NLP (TF-IDF, tokenisation, sentiment analysis)", summary: "Text language processing", icon: FaLaptopCode },
      { name: "Model Selection, Tuning & Pipelines (GridSearchCV, CV)", summary: "Optimisation workflow automation", icon: FaCogs }
    ]
  },
  {
    category: "Full-Stack & Software Engineering",
    skills: [
      { name: "React (component architecture, hooks)", summary: "Frontend component library", icon: FaReact },
      { name: "Node.js & Express (APIs, middleware)", summary: "Backend server development", icon: FaNodeJs },
      { name: "REST API design and integration", summary: "Endpoint data exchange", icon: FaProjectDiagram },
      { name: "Authentication & Security (hashing, sessions, JWT)", summary: "Secure user access", icon: FaShieldAlt },
      { name: "Version control (Git / GitHub)", summary: "Code collaboration tracking", icon: SiGit },
      { name: "Containers & Dev tooling (Docker)", summary: "Environment deployment management", icon: SiDocker }
    ]
  },
  {
    category: "Operational & Manufacturing Skills",
    skills: [
      { name: "Project Management (SDCA, TPM)", summary: "Planning execution monitoring", icon: FaProjectDiagram },
      { name: "Lean Management / Continuous Improvement (NCE principles)", summary: "Efficiency process optimisation", icon: FaCogs },
      { name: "HSE / SHE compliance & GMP/GLP", summary: "Safety regulation adherence", icon: FaShieldAlt },
      { name: "Quality Assurance & Control (CIL standards, audits)", summary: "Standards compliance auditing", icon: FaClipboardList },
      { name: "Performance Acceleration (data-driven process improvement)", summary: "Productivity improvement metrics", icon: FaChartLine }
    ]
  },
  {
    category: "Business, Communication & Leadership",
    skills: [
      { name: "Stakeholder Management & Cross-functional Leadership", summary: "Collaboration relationship building", icon: FaUsers },
      { name: "Report / Grant Writing & Scientific Communication", summary: "Documentation persuasive communication", icon: FaClipboardList },
      { name: "Client liaison & commercial reporting", summary: "Customer relationship management", icon: FaUsers },
      { name: "Coaching, Training & Capability Building", summary: "Mentorship skill development", icon: FaUsers },
      { name: "Principles of Business Administration", summary: "Office operations management", icon: FaCogs },
      { name: "Business Analytics", summary: "Insights predictive modelling", icon: FaChartLine },
      { name: "Economics for Managers", summary: "Market demand strategy", icon: FaProjectDiagram },
      { name: "Financial Accounting", summary: "Statements performance evaluation", icon: FaDatabase }
    ]
  },
  {
    category: "Specialist Laboratory & Research Tools",
    skills: [
      { name: "Material characterisation (AFM, SEM, TEM, FTIR, Raman)", summary: "Microscopy spectroscopy analysis", icon: FaFlask },
      { name: "Analytical instrumentation & HPLC experience", summary: "Chemical sample testing", icon: FaFlask },
      { name: "Experimental design & statistical analysis", summary: "Hypothesis testing validation", icon: FaChartLine }
    ]
  },
  {
    category: "Certifications & Memberships",
    skills: [
      { name: "Associate Member – Royal Society of Chemistry", summary: "Professional chemistry membership", icon: FaCertificate },
      { name: "Associate Member – Royal Society of Biology", summary: "Professional biology membership", icon: FaCertificate },
      { name: "BASIS Professional Register", summary: "Industry certification registry", icon: FaCertificate },
      { name: "Associate Member – Chartered Institute of Environmental Health", summary: "Environmental health membership", icon: FaCertificate },
      { name: "Associate Member – Institute of Sustainability and Environmental Professionals", summary: "Sustainability management membership", icon: FaCertificate }
    ]
  }
];

export default industrialSkills;