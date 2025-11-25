import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

        <main className="container" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical-skills" element={<TechnicalSkills />} />
            <Route path="/industrial-skills" element={<IndustrialSkills />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
