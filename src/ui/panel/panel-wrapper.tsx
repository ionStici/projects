import React from "react";
import { ActiveTags } from "./active-tags";

export function PanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mb-6 sm:mb-10">
      <div className="bg-white/50 backdrop-blur-[2px] p-2 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">{children}</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
        <ActiveTags />
      </div>
    </div>
  );
}
