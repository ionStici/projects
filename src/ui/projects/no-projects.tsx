import { FilterX } from "lucide-react";
import { useApp } from "../../hooks/use-app";

export function NoProjects() {
  const { resetFilters } = useApp();

  return (
    <div
      className="flex items-center justify-center flex-col col-span-3
       backdrop-blur-[1px] bg-white/50 rounded-2xl px-5 py-10 text-white"
    >
      <p className="text-3xl sm:text-4xl font-medium text-center mb-6 sm:mb-8">No projects found</p>
      <button
        onClick={resetFilters}
        className="flex items-center gap-2 cursor-pointer px-4 sm:px-5 h-10 sm:h-11 rounded-lg shadow-lg 
        transition-all duration-200 hover:scale-110 hover:translate-y-[-2px] text-blue-900 bg-white"
      >
        <FilterX className="size-[22px] sm:size-[26px]" />
        <span className="text-lg sm:text-xl font-normal">Reset filters</span>
      </button>
    </div>
  );
}
