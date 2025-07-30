import { motion } from "motion/react";
import { Project } from "./types/Project.tsx";
import { formatDateGerman } from "../../util/dateFormat.tsx";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="rounded-xl bg-gray-50 p-4"
    >
      <h2 className="h2">{project.name}</h2>
      <p className="p">Beschreibung des Projektes</p>
      <p className="p2">{formatDateGerman(project.creationDate)}</p>
    </motion.div>
  );
}

export default ProjectCard;
