import React from "react";
import bcsLogo from "../assets/logos/bcs.png";
import utLogo from "../assets/logos/uta.png";
import monashLogo from "../assets/logos/monash.png";

export default function Home() {
  const profileSrc = "/src/assets/logos/profile.jpg"; // fallback path you can change

  return (
    <section className="home container">
      <div className="home-content">
        <h1>Tri Nguyen — Professional Portfolio</h1>

        <p>
          Technical leader with experience in manufacturing digitalisation,
          AI/ML, data analytics and R&D. I deliver process improvement, full-stack data systems, and commercial analytics.
        </p>

        <h2>Education</h2>
        <ul>
          <li>
            <img src={bcsLogo} alt="BCS" style={{ height: 28, verticalAlign: "middle", marginRight: 8 }} />
            BCS Level 4 — Full Stack Web Development
          </li>
          <li>
            <img src={utLogo} alt="UT Austin" style={{ height: 28, verticalAlign: "middle", marginRight: 8 }} />
            UT Austin — Postgrad Programme in AI & ML (McCombs)
          </li>
          <li>
            <img src={monashLogo} alt="Monash" style={{ height: 28, verticalAlign: "middle", marginRight: 8 }} />
            Monash University — Data Science: Data-Driven Decision Making
          </li>
        </ul>
      </div>

      <img src={profileSrc} alt="Profile" className="profile-pic" />
    </section>
  );
}
