import React from "react";

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline container" role="list">
      {items.map((item) => (
        <div className="timeline-item" key={item.id} role="listitem">
          
          <div className="timeline-dot" aria-hidden>
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.company}
                className="timeline-logo"
              />
            ) : null}
          </div>

          <div className="timeline-content">
            <div className="timeline-period accent-heading">
              {item.period}
            </div>

            <h3 className="timeline-role accent-heading">
              {item.role}
            </h3>

            <p className="text-muted company">{item.company}</p>

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