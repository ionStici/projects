import { Github, Link } from "lucide-react";
import { motion } from "framer-motion";

export function Links({ repo, demo }: { repo: string; demo: string }) {
  return (
    <div className="flex items-center justify-center gap-[10px] mb-4 mt-auto">
      <motion.a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-9 flex items-center justify-center gap-2 text-gray-700 shadow rounded-lg font-medium bg-white/50"
        whileHover={{
          y: -2,
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.2 },
        }}
      >
        <Github className="size-[22px]" />
        <span>Repo</span>
      </motion.a>
      <motion.a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-9 flex items-center justify-center gap-2 text-gray-700 shadow rounded-lg font-medium bg-white/50"
        whileHover={{
          y: -2,
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.2 },
        }}
      >
        <Link className="size-[22px]" />
        <span>Demo</span>
      </motion.a>
    </div>
  );
}
