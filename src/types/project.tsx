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
