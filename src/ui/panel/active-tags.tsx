/* eslint-disable @typescript-eslint/no-unused-vars */
import { X } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveParams } from "../../utils/get-active-params";
import { useGetFeatured } from "../../hooks/use-get-featured";
import { AnimatePresence, motion } from "framer-motion";

export function ActiveTags() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = getActiveParams(searchParams);

  const isFeatured = useGetFeatured();

  const removeFeatured = () => {
    if (isFeatured) {
      setSearchParams((prev) => {
        prev.set("featured", "false");
        return prev;
      });
    }
  };

  const removeLevel = () => {
    setSearchParams((prev) => {
      prev.delete("level");
      return prev;
    });
  };

  const removeParam = (value: string) => {
    setSearchParams((prev) => {
      const entries = Array.from(prev.entries());
      const filtered = entries.filter(([_, val]) => val !== value);
      return new URLSearchParams(filtered);
    });
  };

  const isActive = isFeatured || params.length > 0;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, marginTop: 0 }}
          animate={{ height: "auto", marginTop: "16px" }}
          exit={{ height: 0, marginTop: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center flex-wrap gap-2 mt-4 overflow-hidden"
        >
          <AnimatePresence>
            {isFeatured && <TabButton onClick={removeFeatured}>featured</TabButton>}

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
      initial={{ width: 0, padding: 0 }}
      animate={{ width: "auto", padding: "1px 8px 1px 5px" }}
      exit={{ width: 0, padding: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      type="button"
      onClick={onClick}
      className="flex items-center justify-center flex-nowrap
      bg-green-500 py-[1px] pl-[5px] pr-[8px] rounded-md text-white cursor-pointer overflow-hidden"
    >
      <X className="size-[18px] mr-[2px]" />
      <span className="text-[15px]">{children}</span>
    </motion.button>
  );
}
