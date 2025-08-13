import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import HeroCarousel from "./components/Home/HeroCarousel";
import AboutSection from "./components/AboutSection/AboutSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import DonateForm from "./components/DonateForm/DonateForm";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/donate" element={<DonateForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
