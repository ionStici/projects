import { Project, projects as projectsData } from "../data/projects";
import { useSearchParams } from "react-router-dom";
import { useGetFeatured } from "./use-get-featured";
import { getActiveParams } from "../utils/get-active-params";

export function useGetProjects(): {
  projects: Project[];
  isMore: boolean;
  perPage: number;
  increasePerPage: () => void;
} {
  const [searchParams, setSearchParams] = useSearchParams();

  const isFeatured = useGetFeatured();

  const search = searchParams.get("search");

  const perPage = parseInt(searchParams.get("perPage") || "6");

  const increasePerPage = () => {
    setSearchParams((prev) => {
      prev.set("perPage", (parseInt(prev.get("perPage") || "6") + 6).toString());
      return prev;
    });
  };

  const params = getActiveParams(searchParams);

  // if (isFeatured) {
  //   return {
  //     projects: projectsData.filter((project) => {
  //       const matchesSearch = !search || project.title.toLowerCase().includes(search.toLowerCase());
  //       return project.isFeatured === 1 && matchesSearch;
  //     }),
  //     isMore: false,
  //   };
  // }

  return {
    projects: projectsData.slice(0, perPage),
    isMore: projectsData.length > perPage,
    perPage,
    increasePerPage,
  };
}
