import { Project } from "./types/Project.tsx";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <h2 className="h2">{project.name}</h2>
      <p className="p">Beschreibung des Projektes</p>
      <p className="p2">{project.date}</p>
    </div>
  );
}

export default ProjectCard;
