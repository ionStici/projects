import { useApp } from "../../hooks/use-app";
import { ProjectCard } from "./project-card";
import { ProjectsWrapper } from "./projects-wrapper";

export function Projects() {
  const { projects } = useApp();

  return (
    <ProjectsWrapper>
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ProjectsWrapper>
  );
}
