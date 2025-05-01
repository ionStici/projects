import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search) {
        searchParams.set("search", search);
      } else {
        searchParams.delete("search");
      }
      setSearchParams(searchParams);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, searchParams, setSearchParams]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-12 pl-10 sm:pl-12 pr-3 bg-white rounded-lg shadow
        font-medium text-blue-700 placeholder:text-blue-400"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Search className="size-6 text-blue-400 absolute top-[11px] left-[9px] sm:left-3" />
      {search && (
        <button
          className="hidden md:flex items-center justify-center cursor-pointer
          size-6 absolute top-3 right-3 bg-white transition duration-200
          border border-transparent hover:border-gray-300 rounded-md hover:shadow-inner shadow-gray-300/50"
          onClick={() => setSearch("")}
        >
          <X className="size-6 text-gray-400" />
        </button>
      )}
    </div>
  );
}
