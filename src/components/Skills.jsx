import { useState } from "react";

function Skills() {
  const frontendSkills = [
    { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "JavaScript", img: "https://cdn.worldvectorlogo.com/logos/javascript.svg" },
    { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Python", img: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "Express.js", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  ];

  const uiuxSkills = [
    { name: "Figma", img: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
    { name: "Adobe XD", img: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" },
    { name: "Sketch", img: "https://cdn.worldvectorlogo.com/logos/sketch.svg" },
  ];

  const [activeTab, setActiveTab] = useState("frontend");

  const getSkillsByTab = () => {
    if (activeTab === "frontend") return frontendSkills;
    if (activeTab === "backend") return backendSkills;
    if (activeTab === "uiux") return uiuxSkills;
    return [];
  };

  return (
    <section id="skills" className="container mx-auto px-6 py-20 max-w-4xl">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-6">
        {["frontend", "backend", "uiux"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold rounded-full transition ${
              activeTab === tab
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-white hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {getSkillsByTab().map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center space-y-2 text-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
