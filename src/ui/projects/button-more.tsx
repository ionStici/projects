import { useApp } from "../../hooks/use-app";
import { motion } from "framer-motion";

export function ButtonMore() {
  const { incPerPage, isMore } = useApp();
  if (!isMore) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6, ease: "easeInOut" }}
      onClick={incPerPage}
      className="flex items-center justify-center cursor-pointer w-fit mx-auto mt-16 
      bg-white text-blue-700 text-xl h-10 px-5 rounded-md hover:scale-110 transition duration-200"
    >
      Load more
    </motion.button>
  );
}
