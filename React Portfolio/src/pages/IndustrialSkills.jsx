import industrial from "../data/industrial_skills";


export default function IndustrialSkills() {
return (
<section className="industrial-skills">
<h2>Industrial Skills</h2>
<ul>
{industrial.map((item) => (
<li key={item.id}>{item.skill}</li>
))}
</ul>
</section>
);
}