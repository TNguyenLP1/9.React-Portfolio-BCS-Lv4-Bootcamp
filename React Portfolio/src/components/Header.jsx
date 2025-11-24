import { NavLink } from "react-router-dom";

export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="header">
      <div className="nav-left">Tri Nguyen</div>

      <nav className="nav" role="navigation" aria-label="Main navigation">
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
      </nav>

      <button onClick={toggleTheme} className="theme-toggle" aria-pressed={theme === "dark"}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
