import { Project } from "./../../data/projects";
import { CompletedAt } from "./completed-at";
import { Images } from "./images";
import { LevelLabel } from "./level-label";
import { Links } from "./links";
import { ProjectTitle } from "./project-title";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, images, summary, repo, demo, level, completedAt } = project;
  // const { slug, techStack, tags } = project;

  return (
    <div className="h-full flex flex-col rounded-2xl shadow-lg p-[10px] bg-white/75 backdrop-blur-[1px]">
      <div className="w-full h-64 flex-shrink-0 overflow-hidden relative mb-5">
        <Images images={images} title={title} />
        <LevelLabel level={level} />
      </div>
      <ProjectTitle title={title} summary={summary} />
      <Links repo={repo} demo={demo} />
      <CompletedAt completedAt={completedAt} />
    </div>
  );
}
