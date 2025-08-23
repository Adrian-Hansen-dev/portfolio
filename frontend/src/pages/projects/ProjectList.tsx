import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { PageParams, Project } from "./types.tsx";
import ProjectCard from "./ProjectCard.tsx";
import React from "react";
import InfiniteScrollContainer from "@/components/custom/InfiniteScrollContainer.tsx";
import Loader from "@/components/custom/Loader.tsx";

interface ProjectListProps {
  sortBy: string;
  filterBySkill: string[];
  searchBy: string;
}

function ProjectList({ searchBy, sortBy, filterBySkill }: ProjectListProps) {
  const fetchProjects = async ({
    queryKey,
    pageParam,
  }: QueryFunctionContext<string[], PageParams>) => {
    const [_key, searchBy, sortBy, filterBy] = queryKey;
    const res = await fetch(
      "http://localhost:8080/projects?page=" +
        pageParam.page +
        "&size=" +
        pageParam.size +
        "&sortBy=" +
        sortBy +
        "&nameLike=" +
        searchBy +
        "&" +
        filterBy,
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
    queryKey: [
      "projects",
      searchBy,
      sortBy,
      filterBySkill
        .map((skill) => `skills=${encodeURIComponent(skill)}`)
        .join("&"),
    ],
    queryFn: fetchProjects,
    initialPageParam: { page: 0, size: 6 },
    getNextPageParam: (lastPage) => {
      if (lastPage.page.number == lastPage.page.totalPages - 1)
        return undefined;

      return {
        page: lastPage.page.number + 1,
        size: lastPage.page.size,
      };
    },
  });

  return isPending ? (
    <Loader />
  ) : isError ? (
    <p>Error: {error.message}</p>
  ) : (
    <InfiniteScrollContainer
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
      className={"grid grid-cols-1 gap-4 py-4 md:grid-cols-3"}
    >
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.content.map((project: Project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && (
        <div className="col-span-full flex items-center justify-center">
          <Loader></Loader>
        </div>
      )}
    </InfiniteScrollContainer>
  );
}

export default ProjectList;
