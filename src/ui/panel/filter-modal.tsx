import { AnimatePresence, motion } from "framer-motion";
import { FunnelPlus, X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FilterFeatured } from "./filter-featured";
import { FilterLevel } from "./filter-level";
import { FilterTags } from "./filter-tags";
import { FilterTechs } from "./filter-techs";

type Props = { isOpen: boolean; close: () => void };

export function FilterModal({ isOpen, close }: Props) {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <FilterWrapper>
          <HeaderFilter close={close} />
          <FilterFeatured />
          <FilterLevel />
          <FilterTags />
          <FilterTechs />
        </FilterWrapper>
      )}
      {isOpen && <FilterOverlay key={"filter-wrapper"} close={close} />}
    </AnimatePresence>,
    document.documentElement
  );
}

function FilterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: "300px" }}
      animate={{ x: 0 }}
      exit={{ x: "300px" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed z-40 top-0 right-0 w-[300px] h-dvh"
    >
      <div className="bg-white size-full py-6 overflow-y-auto">{children} </div>
    </motion.div>
  );
}

function FilterOverlay({ close }: { close: () => void }) {
  return (
    <motion.div
      key={"filter-overlay"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onClick={close}
      className="fixed z-30 top-0 left-0 w-full h-dvh bg-black/40 backdrop-blur-[1px]"
    />
  );
}

function HeaderFilter({ close }: { close: () => void }) {
  return (
    <div className="flex items-center justify-between px-5 border-b border-gray-200 mb-5 pb-5">
      <p className="flex items-center gap-[6px] text-blue-900 font-medium text-2xl">
        <FunnelPlus className="size-7 mb-1" />
        <span>Filters</span>
      </p>
      <button
        onClick={close}
        className="flex items-center justify-center size-8 text-blue-900 cursor-pointer border border-transparent hover:border-blue-300 rounded-md transition duration-200 hover:shadow"
      >
        <X className="size-7" />
      </button>
    </div>
  );
}
