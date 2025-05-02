import { useSearchParams } from "react-router-dom";
import { allLevels } from "../../data/projects";
import { CheckboxIcon } from "./checkbox-icon";

export function FilterLevel() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (level: string) => {
    if (searchParams.get("level") === level) {
      searchParams.delete("level");
    } else {
      searchParams.set("level", level);
    }
    setSearchParams(searchParams);
  };

  const activeLevel = searchParams.get("level");

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Level</p>

      <div className="flex flex-col gap-2">
        {allLevels.map((level) => {
          return (
            <button
              key={level}
              onClick={() => handleClick(level)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <CheckboxIcon isOpen={activeLevel === level} />
              <p
                className={`text-blue-900 transition-all duration-200
                ${activeLevel === level ? "font-semibold" : ""}`}
              >
                {level[0].toUpperCase() + level.slice(1)}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
