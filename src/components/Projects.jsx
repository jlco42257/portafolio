  import ProjectCard from "./ProjectCard";
function Projects() {
    const projects = [
      {
        title: "Proyecto 1",
        description: "Proximamente",
        link: "https://linkproyecto1.com",
        image: "https://via.placeholder.com/400x300",
      },
      {
        title: "Proyecto 2",
        description: "Proximamente",
        link: "https://linkproyecto2.com",
        image: "https://via.placeholder.com/400x300",
      },
      {
        title: "Proyecto 3",
        description: "Proximamente",
        link: "https://linkproyecto3.com",
        image: "https://via.placeholder.com/400x300",
      },
    ];
    return (
      <div id="projects" className='h-svh py-16'>
        <h2 className="font-bold text-4xl text-center my-16">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    )
  }

  export default Projects
