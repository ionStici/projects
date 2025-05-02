import { Level } from "../data/projects";

export function getLevelColor(level: Level) {
  switch (level) {
    case "beginner":
      return "bg-blue-500 text-white";
    case "intermediate":
      return "bg-yellow-500 text-white";
    case "advanced":
      return "bg-orange-500 text-white";
    case "expert":
      return "bg-red-500 text-white";
  }
}
