import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Header({ theme, setTheme }) {
const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");


return (
<header className="header">
<div className="nav-left">Portfolio</div>
<nav className="nav">
<NavLink to="/">Home</NavLink>
<NavLink to="/technical-skills">Technical Skills</NavLink>
<NavLink to="/industrial-skills">Industrial Skills</NavLink>
<NavLink to="/career">Career</NavLink>
</nav>
<button onClick={toggleTheme} className="theme-toggle">
{theme === "light" ? "Dark" : "Light"}
</button>
</header>
);
}