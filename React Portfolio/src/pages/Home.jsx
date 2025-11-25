import React from "react";
import bcsLogo from "../assets/logos/bcs.jpg";
import utLogo from "../assets/logos/ut1.png";
import monashLogo from "../assets/logos/monash.jpg";
import logoExeter from "../assets/logos/exeter.jpeg";
import a1 from "../assets/logos/a1.jpg";
import a2 from "../assets/logos/a2.jpg";
import a3 from "../assets/logos/a3.jpg";
import hbs from "../assets/logos/hbs.jpeg";
import oxford from "../assets/logos/oxford.jpg";
import hms from "../assets/logos/hms.png";
import harvard from "../assets/logos/harvard.png";
import ncfe from "../assets/logos/ncfe.jpg";
import hse from "../assets/logos/HSE.png";
import nebosh from "../assets/logos/NEBOSH.png";
import isep from "../assets/logos/ISEP.png";
import iosh from "../assets/logos/IOSH.png";
import cieh from "../assets/logos/CIEH.png";

export default function Home() {
  const profileSrc = "../React Portfolio/src/assets/logos/profile.jpg"; // fallback path

  return (
    <section className="home container grid-layout">
      {/* Left column: summary + education */}
      <div className="home-content grid-left">
        <h1 className="accent-heading">Tri Nguyen — Professional Portfolio</h1>

        <p>
          I am a technical leader with expertise in research, project management, and operational excellence.
          At Nestlé UK, I lead manufacturing digitalisation and performance initiatives, applying my background
          in experimental design and data analysis to drive process improvement and cross-functional collaboration
          across sectors like nanomaterials, sustainable energy, and agriculture. With experience in both
          lab-based R&D and factory operations, I’ve led end-to-end projects from trial design to implementation.
          At STRI Ltd and Nestlé, I’ve delivered improvements in efficiency, safety, and digital capability,
          coaching teams and aligning scientific insights with business goals.
        </p>

        <h2 className="accent-heading">Education</h2>
        <div className="timeline2">
          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={logoExeter} alt="Exeter" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">University of Exeter</h5>
              <p>BSc (Hons) Biochemistry with Industrial Experiences</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={hbs} alt="hbs" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">Harvard Business School Online</h5>
              <p>CORe: Credential of Readiness</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={bcsLogo} alt="BCS" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">British Computer Society - The Chartered Institute for IT</h5>
              <p>Level 4 Full-Stack Web Development Skills Bootcamp</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={utLogo} alt="UT Austin" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">University of Texas at Austin (McCombs School of Business)</h5>
              <p>Post Graduate Program in Artificial Intelligence and Machine Learning: Business Applications</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={monashLogo} alt="Monash" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">Monash University</h5>
              <p>MicroCredential in Data Science: Data‑Driven Decision Making</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={oxford} alt="oxford" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">University of Oxford</h5>
              <p>Continuing Professional Development - Short Course in Clinical Translation and Commercialisation of Nanomedicine</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={hms} alt="hms" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">Harvard Medical School Professional, Corporate, and Cont. Edu.</h5>
              <p>• HMX Pro - Certificate of Achievement in Genetics - Cancer Genomics and Precision Oncology</p>
              <p>• HMX Pro - Certificate of Achievement in Immunology - Immuno-oncology</p>
              <p>• HMX Pro - Certificate of Achievement in Pharmacology - Drug Delivery</p>
            </div>
          </div>

          <div className="timeline2-item">
            <div className="timeline2-icon">
              <img src={harvard} alt="harvard" />
            </div>
            <div className="timeline2-content">
              <h5 className="accent-heading">Harvard Office of the Vice Provost for Advances in Learning</h5>
              <p>Online Short Course in CRISPR: Gene-editing Applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: profile + awards + skill scroll */}
      <div className="grid-right text-center">
        <img src={profileSrc} alt="Profile" className="profile-pic-large rounded-circle mb-4" />

        <div className="awards d-flex justify-content-center gap-3">
          <div className="card award-card p-3">
            <img src={a1} alt="Award 1" className="award-img mb-2" />
          </div>
          <div className="card award-card p-3">
            <img src={a2} alt="Award 2" className="award-img mb-2" />
          </div>
          <div className="card award-card p-3">
            <img src={a3} alt="Award 3" className="award-img mb-2" />
          </div>
        </div>

        {/* Skill scroll moved underneath awards */}
        <div className="skill-marquee">
          <div className="skill-track">
            <span className="skill-item">
              Business Administration & Lean<img src={ncfe} alt="ncfe" />
            </span>
            <span className="skill-item">
              Food Safety & HACCP <img src={cieh} alt="cieh" />
            </span>
            <span className="skill-item">
              Environmental Management <img src={isep} alt="isep" />
            </span>
            <span className="skill-item">
              Official Recognition <img src={hse} alt="hse" />
            </span>
            <span className="skill-item">
              Occupational Health and Safety  <img src={nebosh} alt="nebosh" />
            </span>
            <span className="skill-item">
              Managing Safely  <img src={iosh} alt="iosh" />
            </span>
          </div>

          {/* Second set for continuous motion */}
          <div className="skill-track">
            <span className="skill-item">
              Business Administration & Lean<img src={ncfe} alt="ncfe" />
            </span>
            <span className="skill-item">
              Food Safety & HACCP <img src={cieh} alt="cieh" />
            </span>
            <span className="skill-item">
              Environmental Management <img src={isep} alt="isep" />
            </span>
            <span className="skill-item">
              Official Recognition <img src={hse} alt="hse" />
            </span>
            <span className="skill-item">
              Occupational Health and Safety  <img src={nebosh} alt="nebosh" />
            </span>
            <span className="skill-item">
              Managing Safely  <img src={iosh} alt="iosh" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}