import { useSearchParams } from "react-router-dom";
import { projects as projectsData } from "../../data/projects";
import { useState } from "react";
import { ProjectsWrapper } from "./projects-wrapper";
import ProjectCard from "./project-card";

export function Projects() {
  const [perPage, setPerPage] = useState(6);
  const [projects, setProjects] = useState(projectsData);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <ProjectsWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* {projects.slice(0, perPage).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))} */}
      </div>
    </ProjectsWrapper>
  );
}
