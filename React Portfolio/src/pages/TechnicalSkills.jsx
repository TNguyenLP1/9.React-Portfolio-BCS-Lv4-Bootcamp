import React from "react";
import ProjectGallery from "../components/ProjectGallery";

import bcsProjects from "../data/projects_bcs";
import utProjects from "../data/projects_ut";
import monashProjects from "../data/projects_monash";

import bcsLogo from "../assets/logos/bcs.png";
import utLogo from "../assets/logos/ut1.png";
import monashLogo from "../assets/logos/monash.jpg";

export default function TechnicalSkills() {
  return (
    <div className="page technical-skills">
      <section>
        <div className="skill-header">
          <img src={bcsLogo} alt="BCS Logo" className="provider-logo" />
          <h2 className="provider-title">BCS Level 4 Projects</h2>
        </div>
        <ProjectGallery items={bcsProjects} />
      </section>

      <section>
        <div className="skill-header">
          <img src={utLogo} alt="UT Austin Logo" className="provider-logo" />
          <h2 className="provider-title">UT Austin — AI/ML Projects</h2>
        </div>
        <ProjectGallery items={utProjects} />
      </section>

      <section>
        <div className="skill-header">
          <img src={monashLogo} alt="Monash Logo" className="provider-logo" />
          <h2 className="provider-title">Monash University — Data Science Projects</h2>
        </div>
        <ProjectGallery items={monashProjects} />
      </section>
    </div>
  );
}
