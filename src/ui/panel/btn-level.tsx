import { AnimatePresence, motion } from "framer-motion";
import { Gauge } from "lucide-react";
import { useState } from "react";
import { useApp } from "../../hooks/use-app";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { getLevelColor } from "../../utils/get-level-color";

export function BtnLevel() {
  const { allLevels, activeLevel, toggleLevel } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick<HTMLUListElement>(() => setIsOpen(false));

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
                const color = getLevelColor(level, false);

                return (
                  <li
                    key={i}
                    className="flex items-center w-full border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      onClick={() => {
                        toggleLevel(level);
                        setIsOpen(false);
                      }}
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
