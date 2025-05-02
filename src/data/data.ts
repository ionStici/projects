import { projects } from "./projects";

export type Level = "beginner" | "intermediate" | "advanced" | "expert";

export type Project = {
  id: string;
  title: string;
  slug: string;
  images: string[];
  summary: string;
  repo: string;
  demo: string;
  techStack: string[];
  tags: string[];
  order: number;
  isFeatured: number;
  completedAt: string;
  level: Level;
};

const { allTechs, allTags } = projects.reduce<{ allTechs: string[]; allTags: string[] }>(
  (acc, project) => ({
    allTechs: [...new Set([...acc.allTechs, ...project.techStack])],
    allTags: [...new Set([...acc.allTags, ...project.tags])],
  }),
  { allTechs: [], allTags: [] }
);

export const allLevels = ["beginner", "intermediate", "advanced", "expert"];
export { allTechs, allTags };
