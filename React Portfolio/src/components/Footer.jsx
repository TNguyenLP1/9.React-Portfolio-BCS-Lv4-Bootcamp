import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tri Nguyen — All Rights Reserved.</p>
      <small class="text-muted">ACIEH · AMRSC · AMRSB · AISEP · MBPR (Assoc.)</small>
    </footer>
  );
}
