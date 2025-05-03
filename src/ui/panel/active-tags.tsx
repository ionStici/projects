import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { useApp } from "../../hooks/use-app";

export function ActiveTags() {
  const { isFeatured, params, toggleFeatured, removeLevel, removeParam } = useApp();

  return (
    <AnimatePresence>
      {(isFeatured || params.length > 0) && (
        <motion.div
          initial={{ height: 0, marginTop: 0 }}
          animate={{ height: "auto", marginTop: "16px" }}
          exit={{ height: 0, marginTop: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center flex-wrap gap-2 mt-4 overflow-hidden"
        >
          <AnimatePresence>
            {isFeatured && <TabButton onClick={toggleFeatured}>featured</TabButton>}

            {params.map((param, i) => {
              let onClick = () => removeParam(param[1]);
              if (param[0] === "level") onClick = removeLevel;

              return (
                <TabButton key={i} onClick={onClick}>
                  {param[1]}
                </TabButton>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TabButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.button
      initial={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
      animate={{ width: "auto", paddingLeft: "5px", paddingRight: "8px" }}
      exit={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      type="button"
      onClick={onClick}
      className="flex items-center justify-center flex-nowrap text-nowrap overflow-hidden
      bg-green-500 py-[1px] pl-[5px] pr-[8px] rounded-md text-white cursor-pointer"
    >
      <X className="size-[18px] mr-[2px]" />
      <span className="text-[15px] text-nowrap">{children}</span>
    </motion.button>
  );
}
