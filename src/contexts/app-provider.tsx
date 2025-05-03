import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { allLevels, allTags, allTechs, projects as projectsData } from "../data";
import { Level, Project } from "../types/project";
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
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      const newParams = new URLSearchParams();
      newParams.delete("search");
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
      const filtered = entries.filter(([, val]) => val !== value);
      return new URLSearchParams(filtered);
    });
  };

  // SHOW ALL
  const isShowAll = perPage === 1000 && featured === "false" && params.length === 0;

  const isRemovePerPage = (perPage === 1000 && !isShowAll) || isShowAll;

  const showAll = () => {
    const newParams = new URLSearchParams();

    if (!isShowAll) {
      newParams.set("perPage", "1000");
      newParams.set("featured", "false");
      newParams.delete("search");
    }

    setSearchParams(newParams);
  };

  // SEARCH
  const search = searchParams.get("search") || "";

  const setSearch = (value: string) => {
    if (value) searchParams.set("search", value);
    else searchParams.delete("search");
    if (perPage === 1000 && !isShowAll) searchParams.delete("perPage");
    setSearchParams(searchParams);
  };

  // LEVEL
  const activeLevel = searchParams.get("level") as Level | null;

  const toggleLevel = (level: string, mode: "add" | "toggle" = "add") => {
    if (mode === "add") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("level", level);
      if (isFeatured) newParams.set("featured", "false");
      if (isRemovePerPage) newParams.delete("perPage");
      setSearchParams(newParams);
    }
    if (mode === "toggle") {
      if (searchParams.get("level") === level) {
        searchParams.delete("level");
      } else {
        searchParams.set("level", level);
        if (isFeatured) searchParams.set("featured", "false");
      }
      if (isRemovePerPage) searchParams.delete("perPage");
      setSearchParams(searchParams);
    }
  };

  const removeLevel = () => {
    setSearchParams((prev) => {
      prev.delete("level");
      return prev;
    });
  };

  // TOGGLE PARAM
  const toggleParam = ({ tag, tech }: { tag?: string; tech?: string }) => {
    if (tech) {
      if (!activeTechs.includes(tech)) {
        searchParams.append("tech", tech);
        if (isFeatured) searchParams.set("featured", "false");
      }
      if (activeTechs.includes(tech)) searchParams.delete("tech", tech);
      if (isRemovePerPage) searchParams.delete("perPage");
      setSearchParams(searchParams);
    }
    if (tag) {
      if (!activeTags.includes(tag)) {
        searchParams.append("tag", tag);
        if (isFeatured) searchParams.set("featured", "false");
      }
      if (activeTags.includes(tag)) searchParams.delete("tag", tag);
      if (isRemovePerPage) searchParams.delete("perPage");
      setSearchParams(searchParams);
    }
  };

  // PROJECTS
  const filteredProjects = useMemo(() => {
    let projects: Project[] = [];

    if (isFeatured) {
      projects = projectsData.filter((project) => {
        const matchesSearch = !search || project.title.toLowerCase().includes(search.toLowerCase());
        return project.isFeatured === 1 && matchesSearch;
      });
    } else if (isShowAll) {
      projects = projectsData.filter((project) => {
        const matchesSearch = !search || project.title.toLowerCase().includes(search.toLowerCase());
        return matchesSearch;
      });
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

    return projects;
  }, [isFeatured, isShowAll, search, params]);

  const isMore = filteredProjects.length > perPage && !isFeatured;

  const resetFilters = () => {
    const newParams = new URLSearchParams();
    newParams.set("featured", "false");
    setSearchParams(newParams);
  };

  const value = {
    // UTILS
    resetFilters,
    // DATA
    allTechs,
    allTags,
    allLevels,
    projects: isFeatured || isShowAll ? filteredProjects : filteredProjects.slice(0, perPage),
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
    // SHOW ALL
    showAll,
    isShowAll,
    // SEARCH
    search,
    setSearch,
    // LEVEL
    activeLevel,
    removeLevel,
    toggleLevel,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
