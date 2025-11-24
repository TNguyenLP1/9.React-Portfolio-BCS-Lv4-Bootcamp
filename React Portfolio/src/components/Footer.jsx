export default function Footer() {
return (
<footer className="footer">
<p>© Portfolio</p>
</footer>
);
}


// ProjectCard.jsx
export default function ProjectCard({ title, tech, img, link, description }) {
return (
<div className="project-card">
<img src={img} alt={title} />
<h3>{title}</h3>
<p>{description}</p>
<p className="tech">{tech.join(", ")}</p>
<a href={link} target="_blank">View Project</a>
</div>
);
}