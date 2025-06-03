import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CBazar - Farm to Market",
    description: "Empowering farmers with a digital market and zero-interest crop storage.",
    tech: ["Flutter", "Spring Boot", "PostgreSQL"],
    image: "/images/cbazar.png",
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
    <section className="py-20 text-white" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-80 sm:w-96 border border-white/10 rounded-2xl p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-white/20 rounded-full"
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
                  className="hover:underline flex items-center gap-1"
                >
                  Live <ExternalLink size={16} />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Code <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
