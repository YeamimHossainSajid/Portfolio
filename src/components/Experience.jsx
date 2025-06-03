import React, { useState } from "react";

const experiences = [
  {
    company: "Technonext Software Ltd",
    title: "Software Development Engineer @ Technonext Software Ltd",
    duration: "JUL 2022 - PRESENT",
    points: [
      "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service).",
      "Enabled launch of global services in new regions within a day, cutting deployment time by 90%.",
      "Re-built Route 53’s core domain management and DNS systems for improved user experience."
    ]
  },
  {
    company: "UIU Developers Hub",
    title: "Backend Engineer @ UIU Developers Hub",
    duration: "JAN 2021 - JUN 2022",
    points: [
      "Developed scalable backend services handling millions of daily readers using Spring Boot and Redis.",
      "Led a migration project from monolith to microservices architecture.",
      "Improved content delivery latency by 40% using caching and CDN optimizations."
    ]
  },
  {
    company: "United International University",
    title: "Research Assistant @ United International University",
    duration: "SEP 2020 - DEC 2020",
    points: [
      "Worked on a machine learning model for climate change prediction.",
      "Published findings in an international environmental science journal.",
      "Used Python, Pandas, and Scikit-learn for data preprocessing and modeling."
    ]
  },
  {
    company: "MIST NATIONAL HACKATHON",
    title: "4th Place Winner @ MIST National Hackathon",
    duration: "FEB 2024",
    points: [
      "Designed and developed a real-time disaster relief coordination app using Flutter and Firebase.",
      "Led a team of 4 developers through 36 hours of problem-solving and rapid prototyping.",
      "Awarded 4th place among 100+ teams nationwide for innovation and impact."
    ]
  },
  {
    company: "HARVARD HSIL",
    title: "Finalist @ Harvard Health Systems Innovation Lab",
    duration: "JUL 2023",
    points: [
      "Presented a data-driven solution for improving healthcare access in underserved regions.",
      "Collaborated with international mentors and researchers to refine project scope and impact.",
      "Selected as a finalist among global university participants."
    ]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];

  return (
    <section className="py-20 text-gray-300 mt-40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">/ experience</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar company buttons */}
          <div className="md:w-1/4 space-y-3">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 
                  ${activeIndex === index ? "bg-teal-600 text-white" : "hover:text-teal-400"}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Detail */}
          <div className="md:w-3/4 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {activeExp.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{activeExp.duration}</p>
            <ul className="list-disc ml-5 space-y-3 text-gray-300">
              {activeExp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

