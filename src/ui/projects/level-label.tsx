import { Level } from "../../types/project";
import { getLevelColor } from "../../utils/get-level-color";

export function LevelLabel({ level }: { level: string }) {
  const levelColor = getLevelColor(level as Level);

  return (
    <span
      className={`${levelColor} absolute top-2 right-2 text-sm px-2 py-[1px] rounded-lg font-semibold`}
    >
      {level.toUpperCase()}
    </span>
  );
}
