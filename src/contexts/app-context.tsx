import React from "react";
import { Level, Project } from "../types/project";

type AppContextType = {
  // FEATURED
  isFeatured: boolean;
  toggleFeatured: () => void;
  // PERPAGE
  perPage: number;
  incPerPage: () => void;
  isMore: boolean;
  //
  allTechs: string[];
  allTags: string[];
  allLevels: Level[];
  projects: Project[];
  params: [string, string][];
  removeParam: (value: string) => void;
  showAll: () => void;
  isShowAll: boolean;
  search: string;
  setSearch: (value: string) => void;
  activeLevel: string;
  removeLevel: () => void;
  toggleLevel: (level: string, mode: "add" | "toggle") => void;
  activeTags: string[];
  activeTechs: string[];
  toggleParam: ({ tag, tech }: { tag?: string; tech?: string }) => void;
} | null;

const AppContext = React.createContext<AppContextType>(null);

export { AppContext };
