import { Level } from "../types/project";
import { projects } from "./projects";

const { allTechs, allTags } = projects.reduce<{ allTechs: string[]; allTags: string[] }>(
  (acc, project) => ({
    allTechs: [...new Set([...acc.allTechs, ...project.techStack])],
    allTags: [...new Set([...acc.allTags, ...project.tags])],
  }),
  { allTechs: [], allTags: [] }
);

const allLevels: Level[] = ["beginner", "intermediate", "advanced", "expert"];

export { allTechs, allTags, allLevels };
