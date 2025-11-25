import React from "react";

export default function SkillSection({ logo, title, children }) {
  return (
    <section className="skill-section" aria-labelledby={`sec-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="skill-header">
        {logo && <img src={logo} alt={`${title} logo`} className="provider-logo large" />}
        <h2 id={`sec-${title.replace(/\s+/g, "-").toLowerCase()}`} className="provider-title">{title}</h2>
      </div>

      <div className="skill-body">
        {children}
      </div>
    </section>
  );
}
