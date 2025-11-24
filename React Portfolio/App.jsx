import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TechnicalSkills from "./pages/TechnicalSkills";
import IndustrialSkills from "./pages/IndustrialSkills";
import Career from "./pages/Career";
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