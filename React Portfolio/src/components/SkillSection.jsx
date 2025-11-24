export default function SkillSection({ logo, title, children }) {
return (
<section className="skill-section">
<div className="skill-header">
<img src={logo} alt={title} className="skill-logo" />
<h2>{title}</h2>
</div>
<div className="skill-body">{children}</div>
</section>
);
}