import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useState } from "react";
import { FilterModal } from "./filter-modal";

export function BtnFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ maxWidth: "150px" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-full max-w-24 [@media(min-width:500px)]:max-w-32"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center gap-2 h-12 w-full rounded-lg shadow cursor-pointer
        bg-white text-blue-700 transition hover:shadow-md"
      >
        <Filter className="size-6" />
        <span className="font-medium">Filter</span>
      </button>

      <FilterModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </motion.div>
  );
}
