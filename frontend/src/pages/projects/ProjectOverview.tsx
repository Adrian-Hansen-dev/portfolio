import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { Project } from "./types/Project.tsx";
import ProjectCard from "./ProjectCard.tsx";

function ProjectOverview() {
  const fetchProjects = async ({ pageParam }) => {
    const res = await fetch(
      "http://localhost:8080/user/1/projects?page=" +
        pageParam.page +
        "&size=" +
        pageParam.size,
    );
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: { page: 0, size: 2 },
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined;

      return {
        page: lastPage.pageable.pageNumber + 1,
        size: lastPage.pageable.pageSize, // Dynamisch, falls du size ändern willst
      };
    },
  });

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.content.map((project: Project) => (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        disabled={!hasNextPage || isFetching}
        onClick={() => fetchNextPage()}
        className="rounded-xl bg-blue-500 p-3 text-white disabled:bg-gray-200 disabled:text-gray-800"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load more"
            : "Nothing more to load"}
      </button>
    </>
  );
}

export default ProjectOverview;
