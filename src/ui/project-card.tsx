import { Project } from "../data/projects";
import { motion } from "framer-motion";

type Props = { project: Project[] };

export default function ProjectCard({ project }: Props) {
  return (
    <div>
      <div>
        {/* {isSelected && (
                <div className="absolute w-full h-dvh top-0 left-0 bg-black/50 z-10" />
              )} */}

        <motion.div
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={`bg-white p-3 rounded-lg shadow-lg`}
        >
          <div className="w-full h-80 relative">
            <img
              src={`/images/${project.images[0]}`}
              alt={project.title}
              className="rounded-lg size-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-50 rounded-lg"></div> */}
          </div>

          <div className="py-5">{project.title}</div>
        </motion.div>
      </div>
    </div>
  );
}
