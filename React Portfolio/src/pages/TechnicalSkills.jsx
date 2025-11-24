import ProjectGallery from "../components/ProjectGallery";
import SkillSection from "../components/SkillSection";
import bcs from "../assets/logos/bcs.png";
import uta from "../assets/logos/uta.png";
import monash from "../assets/logos/monash.png";
import bcsData from "../data/projects_bcs";
import utData from "../data/projects_ut";
import monashData from "../data/projects_monash";


export default function TechnicalSkills() {
return (
<div className="technical-skills">
<SkillSection logo={bcs} title="BCS Level 4 (Main)">
<ProjectGallery items={bcsData} />
</SkillSection>


<SkillSection logo={uta} title="UT Austin – AI & ML">
<ProjectGallery items={utData} />
</SkillSection>


<SkillSection logo={monash} title="Monash University – Data Science">
<ProjectGallery items={monashData} />
</SkillSection>
</div>
);
}