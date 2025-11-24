import ProjectCard from "./ProjectCard";


export default function ProjectGallery({ items }) {
return (
<div className="gallery">
{items.map((p) => (
<ProjectCard key={p.id} {...p} />
))}
</div>
);
}