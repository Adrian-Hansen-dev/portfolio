import { Project, Skill } from "./types.tsx";
import { formatDateGerman } from "../../util/dateFormat.tsx";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group min-h-sm w-full ${project.demoLink ? "hover:bg-accent cursor-pointer" : ""}`}
      onClick={() => {
        if (project.demoLink) location.href = project.demoLink;
      }}
    >
      <CardHeader className="justify-between">
        <CardTitle className="flex flex-col">
          <div className="h3 flex">
            {project.name}
            {project.demoLink && (
              <ArrowUpRight className="transition-all ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></ArrowUpRight>
            )}
          </div>
          <p className="p3">{formatDateGerman(project.creationDate)}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <CardDescription>
          <p className="p">{project.description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill: Skill) => (
            <Badge variant="outline">{skill.name}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
