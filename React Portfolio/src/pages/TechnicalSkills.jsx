import React from "react";
import ProjectGallery from "../components/ProjectGallery";
import SkillSection from "../components/SkillSection";

// use public fallbacks for logos to avoid missing file crashes
const bcsLogo = "/vite.svg";
const utaLogo = "/vite.svg";
const monashLogo = "/vite.svg";

// import default exports
import bcsData from "../data/projects_bcs";
import utData from "../data/projects_ut";
import monashData from "../data/projects_monash";

export default function TechnicalSkills() {
  return (
    <div className="technical-skills container">
      <SkillSection logo={bcsLogo} title="BCS Level 4 (Main)">
        <ProjectGallery items={bcsData} />
      </SkillSection>

      <SkillSection logo={utaLogo} title="UT Austin — AI & ML">
        <ProjectGallery items={utData} />
      </SkillSection>

      <SkillSection logo={monashLogo} title="Monash University — Data Science">
        <ProjectGallery items={monashData} />
      </SkillSection>
    </div>
  );
}
