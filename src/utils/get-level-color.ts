import { Level } from "../types/project";

export function getLevelColor(level: Level, withBg = true) {
  switch (level) {
    case "beginner":
      return withBg ? "bg-blue-500 text-white" : "text-blue-500";
    case "intermediate":
      return withBg ? "bg-yellow-500 text-white" : "text-yellow-500";
    case "advanced":
      return withBg ? "bg-orange-500 text-white" : "text-orange-500";
    case "expert":
      return withBg ? "bg-red-500 text-white" : "text-red-500";
  }
}
