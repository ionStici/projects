import { useApp } from "../../hooks/use-app";
import { CheckboxIcon } from "./checkbox-icon";

export function FilterTags() {
  const { allTags, activeTags, toggleParam } = useApp();

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Tags</p>

      <div className="flex flex-col gap-2">
        {allTags.map((tag) => {
          return (
            <button
              key={tag}
              onClick={() => toggleParam({ tag })}
              className="flex items-center gap-2 cursor-pointer"
            >
              <CheckboxIcon isOpen={activeTags.includes(tag)} />
              <p
                className={`text-blue-900 transition-all duration-200
                ${activeTags.includes(tag) ? "font-medium" : ""}`}
              >
                {tag[0].toUpperCase() + tag.slice(1)}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
