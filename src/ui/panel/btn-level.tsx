import { Gauge } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { allLevels } from "../../data/projects";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { useSearchParams } from "react-router-dom";

export function BtnLevel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick<HTMLUListElement>(() => setIsOpen(false));

  const handleLevelClick = (level: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("level", level);
    setSearchParams(newParams);
    setIsOpen(false);
  };

  const activeLevel = searchParams.get("level");

  const getColor = (level: string) => {
    if (level === "beginner") return "text-blue-500";
    if (level === "intermediate") return "text-yellow-500";
    if (level === "advanced") return "text-orange-500";
    if (level === "expert") return "text-red-500";
  };

  return (
    <motion.div
      whileHover={{ maxWidth: "150px" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative hidden sm:block w-full max-w-32"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center gap-2 h-12 w-full
        rounded-lg shadow cursor-pointer bg-white text-blue-700 transition hover:shadow-md"
      >
        <Gauge className="size-6" />
        <span className="font-medium">Level</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: "15px" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: "15px" }}
            className="absolute z-50 w-full bottom-16 left-0"
          >
            <ul ref={ref} className="w-full flex flex-col bg-white rounded-lg shadow-2xl z-10">
              {allLevels.map((level, i) => {
                const color = getColor(level);

                return (
                  <li
                    key={i}
                    className="flex items-center w-full border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      onClick={() => handleLevelClick(level)}
                      className={`w-full h-10 px-2 cursor-pointer text-left font-medium 
                      hover:text-[18px] transition-all duration-200
                      ${activeLevel === level ? `${color}` : "text-gray-600"}`}
                    >
                      {level}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
