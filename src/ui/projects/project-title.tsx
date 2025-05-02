export function ProjectTitle({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="mb-5">
      <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">{title}</p>
      <p className="text-sm md:text-base text-gray-500">{summary}</p>
    </div>
  );
}
