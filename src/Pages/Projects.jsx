import projectsData from "../Array/data";

export default function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>

              <div className="tech-badges">
                {project.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  className="project-btn"
                >
                  GitHub
                </a>
                <a href={project.demo} target="_blank" className="project-btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
