import { useSearchParams } from "react-router-dom";
import { projects as projectsData } from "../../data/projects";
import { useState } from "react";
import { ProjectsWrapper } from "./projects-wrapper";
import ProjectCard from "./project-card";
import { getActiveParams } from "../../utils/get-active-params";
import { useGetFeatured } from "../../hooks/use-get-featured";

export function Projects() {
  const isFeatured = useGetFeatured();
  const [searchParams] = useSearchParams();
  const params = getActiveParams(searchParams);
  const [perPage, setPerPage] = useState(100);
  const [projects, setProjects] = useState(projectsData);

  return (
    <ProjectsWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        {projects.slice(0, perPage).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </ProjectsWrapper>
  );
}
