import React from "react";
import { ExternalLink, Github } from "lucide-react";
import tactiq from "../assets/tactiq.png";

const projects = [
  {
    title: "CBazar - Farm to Market",
    description: "Empowering farmers with a digital market and zero-interest crop storage.",
    tech: ["Flutter", "Spring Boot", "PostgreSQL"],
    image: tactiq,
    live: "#",
    code: "#",
  },
  {
    title: "Peepster",
    description: "Twitter-style app with real-time chat and custom profiles.",
    tech: ["Flutter", "Firebase"],
    image: "/images/peepster.png",
    live: "#",
    code: "#",
  },
  {
    title: "HealthSync",
    description: "Doctor-patient portal with appointment and analytics.",
    tech: ["Spring Boot", "Flutter"],
    image: "/images/healthsync.png",
    live: "#",
    code: "#",
  },
  {
    title: "InvoiceEase",
    description: "Dynamic field-based invoicing platform.",
    tech: ["Spring Boot", "MySQL", "React"],
    image: "/images/invoiceease.png",
    live: "#",
    code: "#",
  },
  {
    title: "EduTrack",
    description: "Student performance tracker with chart reports.",
    tech: ["Spring Boot", "Chart.js"],
    image: "/images/edutrack.png",
    live: "#",
    code: "#",
  },
  {
    title: "TaskNest",
    description: "Collaborative team task manager.",
    tech: ["Flutter", "Firebase"],
    image: "/images/tasknest.png",
    live: "#",
    code: "#",
  },
  {
    title: "PortfolioPro",
    description: "Personal portfolio builder with themes.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/images/portfoliopro.png",
    live: "#",
    code: "#",
  },
  {
    title: "FoodFinder",
    description: "Restaurant finder with map integration.",
    tech: ["React", "Google Maps API"],
    image: "/images/foodfinder.png",
    live: "#",
    code: "#",
  },
  {
    title: "BlogVerse",
    description: "Minimal blog writing platform with Markdown.",
    tech: ["Spring Boot", "React", "MongoDB"],
    image: "/images/blogverse.png",
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section
      className="py-20  text-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">🚀 My Projects</h2>

        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-80 sm:w-96 bg-white/5 border border-white/10 rounded-2xl p-4 relative overflow-hidden shadow-lg hover:shadow-purple-500/30 transition duration-300 group"
            >
              <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-40 blur-xl z-0 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
                />
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 flex items-center gap-1 transition"
                  >
                    Live <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 flex items-center gap-1 transition"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
