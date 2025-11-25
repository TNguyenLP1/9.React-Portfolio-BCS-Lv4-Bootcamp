import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Add bold style for active links
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active bold" : "nav-link";

  return (
    <header className="header">
      <div className="nav-left">
        <h1>Tri Nguyen</h1>
      </div>

      {/* Desktop/Tablet nav */}
      <nav className="nav-desktop" role="navigation" aria-label="Main navigation">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/technical-skills" className={linkClass}>
          Technical Skills
        </NavLink>
        <NavLink to="/industrial-skills" className={linkClass}>
          Industrial Skills
        </NavLink>
        <NavLink to="/career" className={linkClass}>
          Career
        </NavLink>

        <button
          onClick={toggleTheme}
          className="btn btn-outline-secondary btn-sm theme-toggle"
          aria-pressed={theme === "dark"}
          aria-label="Toggle light/dark theme"
        >
          <i
            className={`me-1 ${
              theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }`}
          />
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>

      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <i className="fa-solid fa-bars" />
      </button>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        className={`nav-menu ${menuOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/technical-skills"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          Technical Skills
        </NavLink>
        <NavLink
          to="/industrial-skills"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          Industrial Skills
        </NavLink>
        <NavLink
          to="/career"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          Career
        </NavLink>

        <button
          onClick={() => {
            toggleTheme();
            setMenuOpen(false);
          }}
          className="btn btn-outline-secondary btn-sm theme-toggle"
          aria-pressed={theme === "dark"}
          aria-label="Toggle light/dark theme"
        >
          <i
            className={`me-1 ${
              theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
            }`}
          />
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
}