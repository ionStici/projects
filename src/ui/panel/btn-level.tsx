import { Gauge } from "lucide-react";
import { motion } from "framer-motion";

export function BtnLevel() {
  return (
    <motion.button
      whileHover={{ maxWidth: "150px" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="hidden sm:flex w-full max-w-32 h-12 items-center justify-center gap-2
      rounded-lg shadow cursor-pointer bg-white text-blue-700"
    >
      <Gauge className="size-6" />
      <span className="font-medium">Level</span>
    </motion.button>
  );
}
