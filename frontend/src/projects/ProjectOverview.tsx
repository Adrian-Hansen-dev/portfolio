import { Project } from "./types/Project.tsx";
import ProjectCard from "./ProjectCard.tsx";

function ProjectOverview() {
  const testArray: Project[] = [
    { id: 1, name: "TaskMaster Pro", date: "2025-01-10" },
    { id: 2, name: "CodeFlow", date: "2025-01-10" },
    { id: 3, name: "Visionary AI", date: "2025-01-10" },
    { id: 4, name: "StreamSync", date: "2025-01-10" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {testArray.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </>
  );
}

export default ProjectOverview;
