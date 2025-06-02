import React from "react";
import { Helmet } from "react-helmet";
import sajid from "../assets/sajid.jpg"; // Adjust the path according to your folder structure

function Hero() {
  return (
    <>
      <Helmet>
        <title>Yeamim Hossain Sajid - Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Yeamim Hossain Sajid, a passionate software developer specializing in Flutter, Java Spring Boot, and web development."
        />
        <meta
          name="keywords"
          content="Yeamim Hossain Sajid, Software Developer, Flutter Developer, Java Spring Boot, Web Developer"
        />
        <meta name="author" content="Yeamim Hossain Sajid" />
      </Helmet>

      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6"
        aria-label="Introduction and hero section"
      >
        {/* Left: Text */}
        <div className="text-center md:text-left md:max-w-lg md:mr-10">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Hey, I’m Yeamim Hossain Sajid
          </h1>
          <p className="text-xl max-w-xl mb-8 drop-shadow-md">
            A passionate developer crafting beautiful web experiences.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            aria-label="Navigate to contact section"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Right: Image */}
        <img
          src={sajid}
          alt="Portrait of Yeamim Hossain Sajid"
          className="w-60 h-60 rounded-[30px] object-cover max-w-full mt-10 md:mt-0"
        />
      </section>
    </>
  );
}

export default Hero;


