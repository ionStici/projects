import { Filter, Gauge, Search, X } from "lucide-react";
import { useState } from "react";

export function Panel() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full mb-6 sm:mb-10">
      <div className="bg-white/50 backdrop-blur-[2px] p-2 rounded-xl shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 bg-white pl-10 pr-3 rounded-lg font-medium text-gray-900 placeholder:text-gray-400 shadow"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
            <Search className="size-6 text-gray-400 absolute top-[11px] left-2" />
          </div>

          <div className="flex items-center gap-3">
            <button
              className="w-28 h-12 flex items-center justify-center gap-2 bg-white rounded-lg shadow cursor-pointer text-gray-600 
            transition hover:text-green-500"
            >
              <Filter className="size-6" />
              <span className="font-medium">Filter</span>
            </button>
            <button
              className="w-28 h-12 flex items-center justify-center gap-2 bg-white rounded-lg shadow cursor-pointer text-gray-600
            transition hover:text-green-500"
            >
              <Gauge className="size-6" />
              <span className="font-medium">Level</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button className="flex items-center gap-1 bg-green-500 backdrop-blur-[2px] py-[1px] pl-1 pr-[7px] rounded-md text-white cursor-pointer">
          <X className="size-4" />
          <span className="text-sm">Featured</span>
        </button>
      </div>
    </div>
  );
}
