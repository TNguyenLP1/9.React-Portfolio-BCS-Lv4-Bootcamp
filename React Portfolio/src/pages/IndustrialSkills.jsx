import React from "react";
import industrial from "../data/industrial_skills";

export default function IndustrialSkills() {
  return (
    <section className="industrial-skills container">
      <h2>Industrial & Technical Skills</h2>

      {industrial.map((category, ci) => (
        <div key={ci} className="skill-section" aria-labelledby={`cat-${ci}`}>
          <div className="skill-header">
            {/* category has no logo here - SkillSection component can be used elsewhere */}
            <h3 id={`cat-${ci}`}>{category.category}</h3>
          </div>

          <div className="skill-body">
            <div className="skill-grid">
              {category.skills.map((s, si) => {
                const Icon = s.icon;
                return (
                  <div key={si} className="skill-card">
                    <div className="icon" aria-hidden>
                      {Icon ? <Icon /> : null}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{s.name}</div>
                      <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                        {s.proficiency}
                      </div>
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
