import { FaBriefcase, FaFlask, FaIndustry, FaUniversity, FaToolbox } from "react-icons/fa";

const careerTimeline = [
  {
    id: 1,
    period: "Aug 2024 – Present",
    role: "Technical Leadership (Manufacturing Excellence / Performance Acceleration)",
    company: "Nestlé UK Ltd, Halifax, UK",
    icon: FaIndustry,
    bullets: [
      "Lead digitalisation and performance acceleration projects across manufacturing operations.",
      "Delivered SDCA projects reducing product overfills and planned stops; cut ZLMV from -14.6% to -5.0%.",
      "Led TPM initiative achieving 64% eUPS reduction through loss analysis, standardisation and operator engagement.",
      "Digitalised DMO data capture with tablets/HMI to improve root-cause analysis and decision-making."
    ]
  },
  {
    id: 2,
    period: "Oct 2023 – Aug 2024",
    role: "Research Scientist",
    company: "STRI Ltd, Bingley, UK",
    icon: FaFlask,
    bullets: [
      "Led full-cycle grass variety research trials; designed experiments, managed data capture and reporting.",
      "Applied robust statistical analysis to generate client-ready insights and publications.",
      "Managed budgets, timelines and delivered technical training and SOP development."
    ]
  },
  {
    id: 3,
    period: "Apr 2023 – Oct 2023",
    role: "Junior Application Scientist",
    company: "Molymem Ltd, Manchester, UK",
    icon: FaFlask,
    bullets: [
      "Designed lab-scale MoS₂ membrane experiments and performed material characterisation (AFM, SEM, TEM, FTIR, Raman).",
      "Collaborated with academic and industrial partners to support membrane scale-up and reporting."
    ]
  },
  {
    id: 4,
    period: "Oct 2022 – Apr 2023",
    role: "Payout Advisor (BMW Financial Services) / Customer Service",
    company: "Arvato CRM Solutions / ZARA",
    icon: FaBriefcase,
    bullets: [
      "Managed complex financial enquiries and payouts for BMW; applied data-driven problem solving to resolve cases.",
      "Delivered service excellence and SLA-focused operations in retail customer service roles."
    ]
  },
  {
    id: 5,
    period: "May 2022 – Oct 2022",
    role: "Research Associate",
    company: "Emerald Green Power Ltd, Exeter, UK",
    icon: FaFlask,
    bullets: [
      "Secured Innovate UK funding via strategic research proposals and feasibility studies in sustainable energy.",
      "Produced technical reports, client-facing deliverables and supported commercialization activities."
    ]
  },
  {
    id: 6,
    period: "Nov 2021 – Feb 2022",
    role: "Green Consultant / University Project Lead",
    company: "University of Exeter",
    icon: FaUniversity,
    bullets: [
      "Managed a team project to monitor and improve sustainable travel provision; designed data collection and analysis.",
      "Delivered strategic recommendations that supported the University's Green Agenda."
    ]
  },
  {
    id: 7,
    period: "Apr 2021 – Aug 2021",
    role: "Husbandry Team Member / Industrial Placement",
    company: "National Marine Aquarium",
    icon: FaBriefcase,
    bullets: [
      "Developed a novel water chemistry testing procedure; managed habitat maintenance and propagation activities.",
      "Led practical conservation and husbandry tasks with measurable project outcomes."
    ]
  },
  {
    id: 8,
    period: "Jun 2019 – Aug 2019",
    role: "Team Member / Entry-level Operations",
    company: "McDonald's",
    icon: FaToolbox,
    bullets: [
      "Delivered high-volume customer service, cross-trained across roles and met operational KPIs.",
      "Developed teamwork, time management and process adherence skills."
    ]
  },
  {
    id: 9,
    period: "Sep 2017 – Mar 2018",
    role: "Food & Beverage Assistant",
    company: "Hilton",
    icon: FaToolbox,
    bullets: [
      "Worked in hospitality delivering consistent service standards and operational support."
    ]
  }
];

export default careerTimeline;
