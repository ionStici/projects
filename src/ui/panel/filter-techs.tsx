import { useSearchParams } from "react-router-dom";
import { allTechs } from "../../data/projects";
import { CheckboxIcon } from "./checkbox-icon";
import { useGetFeatured } from "../../hooks/use-get-featured";

export function FilterTechs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFeatured = useGetFeatured();

  const handleTechClick = (tech: string) => {
    const currentTechs = searchParams.getAll("tech");

    if (!currentTechs.includes(tech)) {
      searchParams.append("tech", tech);
      if (isFeatured) searchParams.set("featured", "false");
      setSearchParams(searchParams);
    }

    if (currentTechs.includes(tech)) {
      searchParams.delete("tech", tech);
      setSearchParams(searchParams);
    }
  };

  const activeTechs = searchParams.getAll("tech");

  return (
    <div className="px-5">
      <p className="text-blue-900 font-medium text-lg mb-3">Technologies</p>

      <div className="flex flex-col gap-2">
        {allTechs.map((tech) => {
          return (
            <button
              key={tech}
              onClick={() => handleTechClick(tech)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <CheckboxIcon isOpen={activeTechs.includes(tech)} />
              <p
                className={`text-blue-900 transition-all duration-200
            ${activeTechs.includes(tech) ? "font-medium" : ""}`}
              >
                {tech}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
