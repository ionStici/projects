import { useState } from "react";
import { projects as data } from "../data/projects";
import ProjectCard from "./project-card";

export default function Projects() {
  const [allProjects, setProjects] = useState(data);

  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const totalPages = Math.ceil(allProjects.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const projects = allProjects.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => {
        const isSelected = selectedProject === project.id;

        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
