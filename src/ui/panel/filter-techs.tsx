import { useApp } from "../../hooks/use-app";
import { CheckboxIcon } from "./checkbox-icon";

export function FilterTechs() {
  const { allTechs, activeTechs, toggleParam } = useApp();

  return (
    <div className="px-5">
      <p className="text-blue-900 font-medium text-lg mb-3">Technologies</p>

      <div className="flex flex-col gap-2">
        {allTechs.map((tech) => {
          return (
            <button
              key={tech}
              onClick={() => toggleParam({ tech })}
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
