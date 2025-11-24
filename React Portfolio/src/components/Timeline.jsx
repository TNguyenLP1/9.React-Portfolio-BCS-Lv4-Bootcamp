import React from "react";

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline container" role="list">
      {items.map((item) => (
        <div className="timeline-item" key={item.id} role="listitem">
          <div className="timeline-dot" aria-hidden>
            {item.icon ? <item.icon /> : null}
          </div>

          <div style={{ marginLeft: 28 }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{item.period}</div>
            <h3 style={{ margin: "4px 0" }}>{item.role}</h3>
            <p className="text-muted" style={{ margin: 0 }}>{item.company}</p>

            {item.bullets && (
              <ul>
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="text-muted" style={{ marginTop: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
