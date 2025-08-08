import React, { useState } from "react";
import Select from "../../components/Select/Select.tsx";
import ProjectList from "./ProjectList.tsx";

function ProjectOverview() {
  const filterOptions = [
    { label: "Project Name (A–Z)", value: "name&ascending=true" },
    { label: "Project Name (Z–A)", value: "name&ascending=false" },
    { label: "Newest Projects First", value: "creationDate&ascending=false" },
    { label: "Oldest Projects First", value: "creationDate&ascending=true" },
  ];

  const [sortBy, setSortBy] = useState("name&ascending=true");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="mx-4 flex w-full flex-col md:mx-0 md:max-w-5xl">
      <div className="flex justify-between">
        <h2>Test</h2>
        <Select
          onChange={handleChange}
          options={filterOptions}
          value={sortBy}
          label={"Sort by"}
        ></Select>
      </div>
      <ProjectList sortBy={sortBy}></ProjectList>
    </div>
  );
}

export default ProjectOverview;
