import React from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // import Font Awesome CSS

export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="nav-left"><h1>Tri Nguyen</h1></div>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/technical-skills" className={linkClass}>Technical Skills</NavLink>
        <NavLink to="/industrial-skills" className={linkClass}>Industrial Skills</NavLink>
        <NavLink to="/career" className={linkClass}>Career</NavLink>

        <button
          onClick={toggleTheme}
          className="btn btn-outline-secondary btn-sm theme-toggle"
          aria-pressed={theme === "dark"}
          aria-label="Toggle light/dark theme"
        >
          <i
            className={`me-1 ${theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}`}
          ></i>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
}