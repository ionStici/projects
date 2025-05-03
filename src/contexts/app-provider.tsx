import React from "react";
import { useSearchParams } from "react-router-dom";
import { allLevels, allTags, allTechs, projects as projectsData } from "../data";
import { Project } from "../types/project";
import { getActiveParams } from "../utils/get-active-params";
import { AppContext } from "./app-context";

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // FEATURED
  const featured = searchParams.get("featured");
  const isFeatured = !featured || featured !== "false";

  const toggleFeatured = () => {
    if (isFeatured) {
      searchParams.set("featured", "false");
      setSearchParams(searchParams);
    } else {
      const newParams = new URLSearchParams();
      setSearchParams(newParams);
    }
  };

  // PER PAGE
  const perPage = parseInt(searchParams.get("perPage") || "6");

  const incPerPage = () => {
    setSearchParams((p) => {
      p.set("perPage", (parseInt(p.get("perPage") || "6") + 3).toString());
      return p;
    });
  };

  // PARAMS
  const params = getActiveParams(searchParams);
  const activeTechs = searchParams.getAll("tech");
  const activeTags = searchParams.getAll("tag");

  const removeParam = (value: string) => {
    setSearchParams((prev) => {
      const entries = Array.from(prev.entries());
      const filtered = entries.filter(([_, val]) => val !== value);
      return new URLSearchParams(filtered);
    });
  };

  const toggleParam = ({ tag, tech }: { tag?: string; tech?: string }) => {
    if (tech) {
      if (!activeTechs.includes(tech)) {
        searchParams.append("tech", tech);
        if (isFeatured) searchParams.set("featured", "false");
      }
      if (activeTechs.includes(tech)) searchParams.delete("tech", tech);
      setSearchParams(searchParams);
    }
    if (tag) {
      if (!activeTags.includes(tag)) {
        searchParams.append("tag", tag);
        if (isFeatured) searchParams.set("featured", "false");
      }
      if (activeTags.includes(tag)) searchParams.delete("tag", tag);
      setSearchParams(searchParams);
    }
  };

  // SHOW ALL
  const isShowAll = perPage === 1000 && featured === "false" && params.length === 0;

  const activeLevel = searchParams.get("level");
  const search = searchParams.get("search") || "";

  // functions
  const setSearch = (value: string) => {
    if (value) searchParams.set("search", value);
    else searchParams.delete("search");
    setSearchParams(searchParams);
  };

  const showAll = () => {
    const newParams = new URLSearchParams();
    newParams.set("perPage", "1000");
    newParams.set("featured", "false");
    setSearchParams(newParams);
  };

  const toggleLevel = (level: string, mode: "add" | "toggle" = "add") => {
    if (mode === "add") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("level", level);
      if (isFeatured) newParams.set("featured", "false");
      setSearchParams(newParams);
    }
    if (mode === "toggle") {
      if (searchParams.get("level") === level) {
        searchParams.delete("level");
      } else {
        searchParams.set("level", level);
        if (isFeatured) searchParams.set("featured", "false");
      }
      setSearchParams(searchParams);
    }
  };

  const removeLevel = () => {
    setSearchParams((prev) => {
      prev.delete("level");
      return prev;
    });
  };

  let projects: Project[] = [];
  if (isFeatured) {
    projects = projectsData.filter((project) => project.isFeatured === 1);
  } else if (isShowAll) {
    projects = projectsData;
  } else {
    projects = projectsData.filter((project) => {
      const matchesSearch = !search || project.title.toLowerCase().includes(search.toLowerCase());

      const matchesParams = params.every(([key, value]) => {
        if (key === "tag") {
          return project.tags.includes(value);
        }
        if (key === "tech") {
          return project.techStack.includes(value);
        }
        if (key === "level") {
          return project.level === value;
        }
        return false;
      });

      return matchesSearch && matchesParams;
    });
  }

  const isMore = projects.length > perPage;

  const value = {
    // DATA
    allTechs,
    allTags,
    allLevels,
    projects: isFeatured || isShowAll ? projects : projects.slice(0, perPage),
    // FEATURED
    isFeatured,
    toggleFeatured,
    // PER PAGE
    perPage,
    incPerPage,
    isMore,
    // PARAMS
    params,
    activeTechs,
    activeTags,
    removeParam,
    toggleParam,
    //
    showAll,
    isShowAll,
    removeLevel,
    search,
    setSearch,
    activeLevel,
    toggleLevel,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
