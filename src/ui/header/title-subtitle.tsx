import { motion } from "framer-motion";

export function TitleSubtitle() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 sm:gap-6">
      <motion.h1
        initial={{ x: "-2000px", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], scale: { duration: 0.4 } }}
        className="text-white text-6xl font-bold"
      >
        Ion Stici's Web Work
      </motion.h1>
      <motion.p
        initial={{ x: "2000px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full sm:w-fit text-blue-50 text-lg font-normal bg-blue-400/80 px-3 py-1 rounded-md"
      >
        Browse My Portfolio of Full-Cycle Web Solutions
      </motion.p>
    </div>
  );
}
