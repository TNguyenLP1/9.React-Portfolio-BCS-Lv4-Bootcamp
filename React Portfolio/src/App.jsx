// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import TechnicalSkills from "./pages/TechnicalSkills.jsx";
import IndustrialSkills from "./pages/IndustrialSkills.jsx";
import Career from "./pages/Career.jsx";

import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/industrial-skills" element={<IndustrialSkills />} />
          <Route path="/career" element={<Career />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
