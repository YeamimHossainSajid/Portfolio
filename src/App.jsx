import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import SEO from "./components/SEO";

function App() {
  
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen text-white font-sans">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

//    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] min-h-screen text-white font-sans">
