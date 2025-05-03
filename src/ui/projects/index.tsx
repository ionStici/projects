import { useApp } from "../../hooks/use-app";
import { NoProjects } from "./no-projects";
import { Project } from "./project";
import { ProjectsWrapper } from "./projects-wrapper";

export function Projects() {
  const { projects } = useApp();

  return (
    <ProjectsWrapper>
      {projects.length > 0 ? projects.map((p) => <Project key={p.id} p={p} />) : <NoProjects />}
    </ProjectsWrapper>
  );
}
