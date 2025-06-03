import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
   <section className="min-h-screen flex items-center justify-center text-white px-6">
      <div className="max-w-3xl text-center flex flex-col items-center">
        {/* Greeting */}
        <p className="text-teal-400 text-lg mb-2 animate-pulse">Hey there 👋</p>

        {/* Name with Gradient */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent bg-clip-text drop-shadow-lg mb-4">
          I'm Yeamim Hossain Sajid
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          <span className="text-white">
            <Typewriter
              words={['I build full-stack apps.', 'I design UIs.', 'I solve real problems.']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mb-6 leading-relaxed">
          I'm a passionate developer specializing in crafting clean, modern, and performant web applications. My goal is to solve real-world problems with elegant code and seamless user experiences.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-6 text-2xl text-gray-300">
          <a href="https://github.com/YeamimHossainSajid" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/yeamim-hossain-sajid-50b100267/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-white transition duration-300" />
          </a>
          <a href="mailto:yeamimhossainsajid@example.com" className="hover:text-white transition duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Scroll Down Animation */}
        <div className="mt-12 animate-bounce text-gray-500 text-sm">
          ↓ Scroll to see my work
        </div>
      </div>
    </section>
  );
};

export default Hero;
