import { useApp } from "../../hooks/use-app";
import { CheckboxIcon } from "./checkbox-icon";

export function FilterFeatured() {
  const { isFeatured, toggleFeatured, showAll, isShowAll } = useApp();

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Featured</p>

      <div className="flex flex-col gap-2">
        <button onClick={showAll} className="flex items-center gap-2 cursor-pointer">
          <CheckboxIcon isOpen={isShowAll} />
          <p
            className={`text-blue-900 transition-all duration-200
            ${isShowAll ? "font-medium" : ""}`}
          >
            Show all
          </p>
        </button>
        <button onClick={toggleFeatured} className="flex items-center gap-2 cursor-pointer">
          <CheckboxIcon isOpen={isFeatured} />
          <p
            className={`text-blue-900 transition-all duration-200
          ${isFeatured ? "font-medium" : ""}`}
          >
            Show featured projects
          </p>
        </button>
      </div>
    </div>
  );
}
