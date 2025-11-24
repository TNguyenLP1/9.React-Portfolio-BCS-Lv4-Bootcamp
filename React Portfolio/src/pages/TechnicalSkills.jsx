// src/pages/TechnicalSkills.jsx
import ProjectGallery from "../components/ProjectGallery";

import bcsProjects from "../data/projects_bcs";
import utProjects from "../data/projects_ut";
import monashProjects from "../data/projects_monash";

import bcsLogo from "../assets/logos/bcs.png";
import utLogo from "../assets/logos/uta.png";
import monashLogo from "../assets/logos/monash.png";

export default function TechnicalSkills() {
  return (
    <div className="page technical-skills">

      {/* BCS */}
      <section>
        <img src={bcsLogo} alt="BCS Logo" className="provider-logo" />
        <h2>BCS Level 4 Projects</h2>
        <ProjectGallery items={bcsProjects} />
      </section>

      {/* UT Austin */}
      <section>
        <img src={utLogo} alt="UT Austin Logo" className="provider-logo" />
        <h2>UT Austin AI/ML Projects</h2>
        <ProjectGallery items={utProjects} />
      </section>

      {/* Monash University */}
      <section>
        <img src={monashLogo} alt="Monash University Logo" className="provider-logo" />
        <h2>Monash University Data Science Projects</h2>
        <ProjectGallery items={monashProjects} />
      </section>

    </div>
  );
}
