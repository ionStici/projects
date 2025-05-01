import { useSearchParams } from "react-router-dom";
import { projects as projectsData } from "../../data/projects";
import { useState } from "react";
import { ProjectsWrapper } from "./projects-wrapper";

export function Projects() {
  const [perPage, setPerPage] = useState(6);
  const [projects, setProjects] = useState(projectsData);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <ProjectsWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
    </ProjectsWrapper>
  );
}
