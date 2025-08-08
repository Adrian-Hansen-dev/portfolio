import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { PageParams, Project, ProjectListProps } from "./types.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import ProjectCard from "./ProjectCard.tsx";
import React from "react";
import InfiniteScrollContainer from "../../components/InfiniteScrollContainer/InfiniteScrollContainer.tsx";

function ProjectList({ sortBy }: ProjectListProps) {
  const fetchProjects = async ({
    queryKey,
    pageParam,
  }: QueryFunctionContext<string[], PageParams>) => {
    const [_key, sortBy] = queryKey;
    const res = await fetch(
      "http://localhost:8080/projects?page=" +
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
    <div className="m-10">
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
          <div className="mx-2 flex justify-center">
            <Loader></Loader>
          </div>
        )}
      </InfiniteScrollContainer>
      {/*<button*/}
      {/*  disabled={!hasNextPage || isFetching}*/}
      {/*  onClick={() => fetchNextPage()}*/}
      {/*  className="rounded-xl bg-blue-500 p-3 text-white disabled:bg-gray-200 disabled:text-gray-800"*/}
      {/*>*/}
      {/*  {isFetchingNextPage ? (*/}
      {/*    <Loader />*/}
      {/*  ) : hasNextPage ? (*/}
      {/*    "Load more"*/}
      {/*  ) : (*/}
      {/*    "Nothing more to load"*/}
      {/*  )}*/}
      {/*</button>*/}
    </div>
  );
}

export default ProjectList;
