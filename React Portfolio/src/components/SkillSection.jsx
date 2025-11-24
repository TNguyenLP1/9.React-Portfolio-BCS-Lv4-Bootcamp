export default function SkillSection({ logo, title, children }) {
  return (
    <section className="skill-section">
      <div className="skill-header">
        {logo && <img src={logo} alt={title} className="provider-logo" />}
        <h2 className="provider-title">{title}</h2>
      </div>

      <div className="skill-content">
        {children}
      </div>
    </section>
  );
}
