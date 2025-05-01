import { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <div className="h-full">
      <div className="bg-white p-2 rounded-2xl shadow-lg h-full flex flex-col">
        <div className="w-full h-80 relative flex-shrink-0">
          <img
            src={`/images/${project.images[0]}`}
            alt={project.title}
            className="rounded-t-xl size-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-50 rounded-lg"></div> */}
        </div>

        <div className="py-5 font-semibold text-xl">{project.title}</div>
      </div>
    </div>
  );
}
