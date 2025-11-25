import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="header">
      <div className="nav-left"><h1>Tri Nguyen</h1></div>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <NavLink to="/" className={linkClass} end><h2>Home</h2></NavLink>
        <NavLink to="/technical-skills" className={linkClass}><h2>Technical Skills</h2></NavLink>
        <NavLink to="/industrial-skills" className={linkClass}><h2>Industrial Skills</h2></NavLink>
        <NavLink to="/career" className={linkClass}><h2>Career</h2></NavLink>
      </nav>

      <button onClick={toggleTheme} className="theme-toggle" aria-pressed={theme === "dark"}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
