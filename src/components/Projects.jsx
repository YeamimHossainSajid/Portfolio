function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A sleek React app with beautiful UI.",
      link: "https://github.com/yourgithub/project-one",
    },
    {
      title: "Project Two",
      description: "API built with Node.js and Express.",
      link: "https://github.com/yourgithub/project-two",
    },
    {
      title: "Project Three",
      description: "A portfolio website built with Gatsby.",
      link: "https://github.com/yourgithub/project-three",
    },
  ];

  return (
    <section
      id="projects"
      className="container mx-auto px-6 py-20 max-w-5xl"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ title, description, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;