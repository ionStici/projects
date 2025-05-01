/* eslint-disable @typescript-eslint/no-unused-vars */
import { X } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveParams } from "../../utils/get-active-params";
import { useGetFeatured } from "../../hooks/use-get-featured";

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

  console.log(params);

  return (
    <>
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
    </>
  );
}

function TabButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-[2px] 
      bg-green-500 py-[1px] pl-[5px] pr-[8px] rounded-md text-white cursor-pointer"
    >
      <X className="size-[18px]" />
      <span className="text-[15px]">{children}</span>
    </button>
  );
}
