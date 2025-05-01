import { Filter } from "lucide-react";
import { motion } from "framer-motion";

export function BtnFilter() {
  return (
    <motion.button
      whileHover={{ maxWidth: "150px" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-full max-w-24 [@media(min-width:500px)]:max-w-32 h-12 flex items-center justify-center gap-2 
      rounded-lg shadow cursor-pointer bg-white text-blue-700"
    >
      <Filter className="size-6" />
      <span className="font-medium">Filter</span>
    </motion.button>
  );
}
