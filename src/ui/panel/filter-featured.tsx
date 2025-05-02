import { useSearchParams } from "react-router-dom";
import { CheckboxIcon } from "./checkbox-icon";
import { useGetFeatured } from "../../hooks/use-get-featured";

export function FilterFeatured() {
  const [searchParams, setSearchParams] = useSearchParams();
  const featured = useGetFeatured();

  const handleClick = () => {
    if (featured) {
      searchParams.set("featured", "false");
      setSearchParams(searchParams);
    } else {
      const newParams = new URLSearchParams();
      setSearchParams(newParams);
    }
  };

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Featured</p>

      <button onClick={handleClick} className="flex items-center gap-2 cursor-pointer">
        <CheckboxIcon isOpen={featured} />
        <p
          className={`text-blue-900 transition-all duration-200
          ${featured ? "font-medium" : ""}`}
        >
          Show featured projects
        </p>
      </button>
    </div>
  );
}
