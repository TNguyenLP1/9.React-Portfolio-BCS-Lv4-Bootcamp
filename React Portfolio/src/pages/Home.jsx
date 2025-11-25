import React from "react";
import bcsLogo from "../assets/logos/bcs.png";
import utLogo from "../assets/logos/uta.png";
import monashLogo from "../assets/logos/monash.png";

export default function Home() {
  const profileSrc = "/src/assets/logos/profile.jpg"; // fallback path

  return (
    <section className="home container grid-layout">
      {/* Left column: summary + education + skills scroll */}
      <div className="home-content grid-left">
        <h1>Tri Nguyen — Professional Portfolio</h1>

        <p>
          Technical leader with experience in manufacturing digitalisation,
          AI/ML, data analytics and R&D. I deliver process improvement,
          full-stack data systems, and commercial analytics.
        </p>

        <h2>Education</h2>
        <ul>
          <li>
            <img src={bcsLogo} alt="BCS" style={{ height: 28, marginRight: 8 }} />
            BCS Level 4 — Full Stack Web Development
          </li>
          <li>
            <img src={utLogo} alt="UT Austin" style={{ height: 28, marginRight: 8 }} />
            UT Austin — Postgrad Programme in AI & ML (McCombs)
          </li>
          <li>
            <img src={monashLogo} alt="Monash" style={{ height: 28, marginRight: 8 }} />
            Monash University — Data Science: Data-Driven Decision Making
          </li>
        </ul>

        {/* Skills scroll underneath education */}
        <div className="skill-marquee">
          <div className="skill-track">
            <span className="skill-item">
              React <img src="/placeholders/react.png" alt="React" />
            </span>
            <span className="skill-item">
              Node.js <img src="/placeholders/node.png" alt="Node.js" />
            </span>
            <span className="skill-item">
              Python <img src="/placeholders/python.png" alt="Python" />
            </span>
            <span className="skill-item">
              R / RStudio <img src="/placeholders/r.png" alt="R" />
            </span>
            <span className="skill-item">
              SQL <img src="/placeholders/sql.png" alt="SQL" />
            </span>
          </div>
        </div>
      </div>

      {/* Right column: profile + awards */}
      <div className="grid-right text-center">
        <img src={profileSrc} alt="Profile" className="profile-pic-large rounded-circle mb-4" />

        <div className="awards d-flex justify-content-center gap-3">
          <div className="card award-card p-3">
            <img src="/placeholders/award1.png" alt="Award 1" className="award-img mb-2" />
            <p className="mb-0">Best Innovator</p>
          </div>
          <div className="card award-card p-3">
            <img src="/placeholders/award2.png" alt="Award 2" className="award-img mb-2" />
            <p className="mb-0">Top Research Award</p>
          </div>
          <div className="card award-card p-3">
            <img src="/placeholders/award3.png" alt="Award 3" className="award-img mb-2" />
            <p className="mb-0">Leadership Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}