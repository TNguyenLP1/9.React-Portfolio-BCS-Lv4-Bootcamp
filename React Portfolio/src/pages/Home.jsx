import React from "react";

export default function Home() {
  // Use public fallback image so missing local asset won't crash app
  const profileSrc = "/src/assets/logos/profile.jpg";

  return (
    <section className="home container">
      <div className="home-content">
        <h1>Tri Nguyen — Professional Portfolio</h1>
        <p>
          Technical leader with experience in manufacturing digitalisation,
          AI/ML, data analytics, and R&D. Proven track record delivering
          process improvements and deploying full-stack data solutions.
        </p>

        <h2>Education</h2>
        <ul>
          <li>BCS Level 4 Full Stack Web Development (Step8Up)</li>
          <li>UT Austin — Postgrad Programme in AI & ML (McCombs)</li>
          <li>Monash University — Data Science: Data-Driven Decision Making</li>
        </ul>
      </div>

      <img src={profileSrc} alt="Profile" className="profile-pic" />
    </section>
  );
}
