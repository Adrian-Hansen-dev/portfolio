import { motion } from "motion/react";
import { Project, Skill } from "./types.tsx";
import { formatDateGerman } from "../../util/dateFormat.tsx";
import { Badge } from "@/components/ui/badge";

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
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      className="rounded-xl bg-gray-50 p-4"
    >
      <div className="mb-2 h-40 w-full rounded-xl bg-gray-100"></div>
      <h2 className="h2">{project.name}</h2>
      <p className="p2">{formatDateGerman(project.creationDate)}</p>
      <div className="flex gap-2">
        {project.skills.map((skill: Skill) => (
          <Badge variant="outline">{skill.name}</Badge>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
