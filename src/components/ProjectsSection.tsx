import { projects } from "../config/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos destacados</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
