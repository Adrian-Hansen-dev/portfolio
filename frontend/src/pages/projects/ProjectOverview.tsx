import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard.tsx";
import Select from "../../components/Select/Select.tsx";
import { PageParams, Project } from "./types.tsx";

function ProjectOverview() {
  const filterOptions = [
    { label: "Project Name (A–Z)", value: "name&ascending=true" },
    { label: "Project Name (Z–A)", value: "name&ascending=false" },
    { label: "Newest Projects First", value: "creationDate&ascending=false" },
    { label: "Oldest Projects First", value: "creationDate&ascending=true" },
  ];

  const [sortBy, setSortBy] = useState("name&ascending=true");

  const fetchProjects = async ({
    queryKey,
    pageParam,
  }: QueryFunctionContext<string[], PageParams>) => {
    const [_key, sortBy] = queryKey;
    const res = await fetch(
      "http://localhost:8080/user/1/projects?page=" +
        pageParam.page +
        "&size=" +
        pageParam.size +
        "&sortBy=" +
        sortBy,
    );
    return res.json();
  };

  const {
    isError,
    isPending,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["projects", sortBy],
    queryFn: fetchProjects,
    initialPageParam: { page: 0, size: 4 },
    getNextPageParam: (lastPage) => {
      if (lastPage.page.number == lastPage.page.totalPages - 1)
        return undefined;

      return {
        page: lastPage.page.number + 1,
        size: lastPage.page.size,
      };
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value);
  };

  return isPending ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="m-10">
      <Select
        onChange={handleChange}
        options={filterOptions}
        value={sortBy}
      ></Select>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
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
    </div>
  );
}

export default ProjectOverview;
