import React from "react";
import Timeline from "../components/Timeline";
import timeline from "../data/career_timeline";

export default function Career() {
  return (
    <section className="career container">
      <h2>Career Timeline</h2>
      <Timeline items={timeline} />
    </section>
  );
}
