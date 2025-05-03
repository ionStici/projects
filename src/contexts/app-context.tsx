import React from "react";
import { Level, Project } from "../types/project";

type AppContextType = {
  // UTILS
  resetFilters: () => void;
  // DATA
  allTechs: string[];
  allTags: string[];
  allLevels: Level[];
  projects: Project[];
  // FEATURED
  isFeatured: boolean;
  toggleFeatured: () => void;
  // PER PAGE
  perPage: number;
  incPerPage: () => void;
  isMore: boolean;
  // PARAMS
  params: [string, string][];
  activeTags: string[];
  activeTechs: string[];
  removeParam: (value: string) => void;
  toggleParam: ({ tag, tech }: { tag?: string; tech?: string }) => void;
  // SHOW ALL
  showAll: () => void;
  isShowAll: boolean;
  // SEARCH
  search: string;
  setSearch: (value: string) => void;
  // LEVEL
  activeLevel: Level | null;
  removeLevel: () => void;
  toggleLevel: (level: string, mode: "add" | "toggle") => void;
} | null;

const AppContext = React.createContext<AppContextType>(null);

export { AppContext };
