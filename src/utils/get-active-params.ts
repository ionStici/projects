/* eslint-disable @typescript-eslint/no-unused-vars */
export const getActiveParams = (searchParams: URLSearchParams) => {
  return Array.from(searchParams.entries()).reduce<[string, string][]>((acc, [key, value]) => {
    if (key === "level") {
      if (acc.some(([k]) => k === "level")) return acc;
      if (!["beginner", "intermediate", "advanced", "expert"].includes(value)) return acc;
      return [...acc, [key, value]];
    }
    if (key !== "tag" && key !== "tech") return acc;
    if (acc.some(([_, v]) => v === value)) return acc;
    return [...acc, [key, value]];
  }, [] as [string, string][]);
};
