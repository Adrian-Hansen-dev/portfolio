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
    <>
      <Select
        onChange={handleChange}
        options={filterOptions}
        value={sortBy}
      ></Select>
      <ProjectList sortBy={sortBy}></ProjectList>
    </>
  );
}

export default ProjectOverview;
