import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-xl font-semibold">Yeamim Hossain Sajid</h2>
          <p className="text-sm text-gray-400 mt-1">
            Building clean, modern, and meaningful apps.
          </p>
        </div>

        {/* Center - nav links */}
        <div className="flex justify-center gap-8 text-gray-300 text-sm md:flex-1">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right - social icons */}
        <div className="flex gap-4 justify-center md:flex-1 md:justify-end">
          <a href="https://github.com/YeamimHossainSajid" target="_blank" rel="noreferrer">
            <Github size={20} className="hover:text-white text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/yeamim-hossain-sajid-50b100267/" target="_blank" rel="noreferrer">
            <Linkedin size={20} className="hover:text-white text-gray-400" />
          </a>
          <a href="mailto:yeamimhossainsajid@example.com">
            <Mail size={20} className="hover:text-white text-gray-400" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <Code size={20} className="hover:text-white text-gray-400" />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Yeamim Hossain Sajid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
