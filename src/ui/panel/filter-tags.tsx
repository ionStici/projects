import { useSearchParams } from "react-router-dom";
import { CheckboxIcon } from "./checkbox-icon";
import { allTags } from "../../data/projects";
import { useGetFeatured } from "../../hooks/use-get-featured";

export function FilterTags() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFeatured = useGetFeatured();

  const handleTagClick = (tag: string) => {
    const currentTags = searchParams.getAll("tag");

    if (!currentTags.includes(tag)) {
      if (isFeatured) searchParams.set("featured", "false");
      searchParams.append("tag", tag);
      setSearchParams(searchParams);
    }

    if (currentTags.includes(tag)) {
      searchParams.delete("tag", tag);
      setSearchParams(searchParams);
    }
  };

  const activeTags = searchParams.getAll("tag");

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Tags</p>

      <div className="flex flex-col gap-2">
        {allTags.map((tag) => {
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
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
