import { useState } from "react";
import { projects as data } from "../data/projects";
import ProjectCard from "./project-card";
import { Panel } from "./panel";

export default function Projects() {
  const [allProjects, setProjects] = useState(data);

  const [perPage, setPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const totalPages = Math.ceil(allProjects.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const projects = allProjects.slice(startIndex, endIndex);

  const techs = [...new Set(data.map((project) => project.techStack).flat())];
  const tags = [...new Set(data.map((project) => project.tags).flat())];
  const levels = [...new Set(data.map((project) => project.level).flat())];

  console.log(levels);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Panel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
