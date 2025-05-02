import { useGetProjects } from "../../hooks/use-get-projects";
import ProjectCard from "./project-card";
import { ProjectsWrapper } from "./projects-wrapper";

export function Projects() {
  const { projects, isMore, perPage, increasePerPage } = useGetProjects();

  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {isMore && <button onClick={increasePerPage}>Load more</button>}
    </ProjectsWrapper>
  );
}
