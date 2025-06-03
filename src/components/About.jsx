import React from 'react';
import sajid from "../assets/sajid.jpg";

const About = () => {
  return (
    
    <section>




      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">/ about me</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            I am currently a <span className="font-semibold text-white">Software Development Engineer at </span>
            <span className="text-teal-400 font-semibold">Technonext Software Ltd</span>,  Working on Spring Boot microservices under the Web Platform team.
            At the same time, I am undertaking a <span className="font-semibold">Bachelor’s of Science in Computer Science</span> at 
            <span className="text-teal-400 font-semibold"> United International University</span>.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            Here are some technologies I have been working with:
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm md:text-base mb-6">
            <p className="flex items-center">▸ Springboot</p>
            <p className="flex items-center">▸ Kafka</p>
            <p className="flex items-center">▸ AWS</p>
            <p className="flex items-center">▸ PostgreSQL</p>
            <p className="flex items-center">▸ Javascript ES6+</p>
            <p className="flex items-center">▸ React.js</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">
            Outside of work, I’m interested in following the developments of science.
            I also play a lot of video games. And make Youtube Vedios.
          </p>
        </div>

        {/* Image Section */}
     <div className="w-full md:w-1/3 flex justify-center">
  <img 
    src={sajid} 
    alt="Profile" 
    className="rounded-xl object-cover w-[80%] max-w-xs shadow-lg"
  />
</div>
      </div>
    </section>
  );
};

export default About;
