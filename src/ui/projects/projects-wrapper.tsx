import { motion } from "framer-motion";
import { ButtonMore } from "./button-more";

export function ProjectsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-[1200px] mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: "easeInOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8"
      >
        {children}
      </motion.div>
      <ButtonMore />
    </section>
  );
}
