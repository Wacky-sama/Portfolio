const projects = [
  {
    title: "TRACE System",
    description:
      "A role-based alumni management system with admin dashboards, event creation, and user approval features.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Wacky-sama/TRACE",
    target: "_blank",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and experience.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/Wacky-sama/Portfolio",
    target: "_blank",
  },
  {
    title: "Linux Hive: Home Passive-Income Server",
    description:
      "A self-driven project exploring Linux server administration and passive income strategies.",
    tech: ["Linux (Debian)", "Docker", "Bash", "Honeygain"],
    link: "https://github.com/Wacky-sama/Linux-Hive-Home-Passive-Income-Server",
    target: "_blank",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-26 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white scroll-mt-20"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center sm:text-left">
          Projects
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
              <p className="text-white/70 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-800/40 text-white text-xs px-2 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.target || "_self"}
                rel={
                  project.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block text-sm font-semibold text-[#1a3afd] hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
