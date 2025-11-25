import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({ items = [] }) {
  return (
    <div className="gallery" role="list">
      {items.map((p) => (
        <div role="listitem" key={p.id || p.title}>
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
  );
}
