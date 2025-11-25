import React from "react";
import industrial from "../data/industrial_skills";

export default function IndustrialSkills() {
  return (
    <section className="industrial-skills container">
      {/* Main heading obeys theme text colour */}
      <h2 className="skill-main-heading">Industrial & Technical Skills</h2>

      {industrial.map((category, ci) => (
        <div key={ci} className="skill-section" role="list" aria-labelledby={`cat-${ci}`}>
          
          {/* Category title obeys accent colour */}
          <div className="skill-header">
            <h3 id={`cat-${ci}`} className="accent-heading">
              {category.category}
            </h3>
          </div>

          <div className="skill-body">
            <div className="skill-grid">
              {category.skills.map((s, si) => {
                const Icon = s.icon;
                return (
                  <div key={si} className="skill-card" role="listitem">
                    <div className="icon" aria-hidden>
                      {Icon ? <Icon /> : null}
                    </div>
                    <div>
                      {/* Skill name accent colour */}
                      <div className="skill-name accent-heading">{s.name}</div>
                      {/* Summary muted colour */}
                      <div className="text-muted skill-level">{s.summary}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}