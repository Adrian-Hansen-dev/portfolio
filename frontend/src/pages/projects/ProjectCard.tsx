import { Project, Skill } from "./types.tsx";
import { formatDateGerman } from "../../util/dateFormat.tsx";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="min-h-sm w-full md:max-w-md">
      <CardHeader>
        <CardTitle className="h3">{project.name}</CardTitle>
        <CardDescription className="p2">
          {formatDateGerman(project.creationDate)}
        </CardDescription>
        <div className="flex gap-2">
          {project.skills.map((skill: Skill) => (
            <Badge variant="outline">{skill.name}</Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}

export default ProjectCard;
