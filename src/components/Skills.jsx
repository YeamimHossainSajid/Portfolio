import { useState } from "react";

function Skills() {
  const frontendSkills = [
    { name: "JavaScript", img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
    { name: "React", img: "https://img.icons8.com/clouds/512/react.png" },
    { name: "Next Js", img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" },
    { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Python", img: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "Spring", img: "https://www.vincenzoracca.com/images/spring.png" },
    { name: "Kafka", img: "https://www.svgrepo.com/show/353950/kafka.svg" },
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

      {/* Skills grid centered and responsive */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
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
