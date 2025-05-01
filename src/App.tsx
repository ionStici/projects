import { useState } from "react";
import { projects as projectsData } from "./data/projects";

export default function App() {
  const [projects, setProjects] = useState(projectsData);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <div>
      {currentProjects.map((project) => {
        return <div key={project.id}>{project.title}</div>;
      })}
    </div>
  );
}
