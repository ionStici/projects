import { motion } from "framer-motion";
import React from "react";
import { ActiveTags } from "./active-tags";

export function PanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.25 }}
      className="w-full mb-6 sm:mb-10"
    >
      <div className="bg-white/50 backdrop-blur-[2px] p-2 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">{children}</div>
      </div>

      <ActiveTags />
    </motion.div>
  );
}
