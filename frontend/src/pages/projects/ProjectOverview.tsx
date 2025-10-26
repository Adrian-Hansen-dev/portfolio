import React, { useState } from "react";
import ProjectList from "./ProjectList.tsx";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownUp, Funnel, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import SearchInput from "@/components/custom/SearchInput.tsx";
import MultiSelect from "@/components/custom/MultiSelect.tsx";
import CustomSelect from "@/components/custom/CustomSelect.tsx";
import useDebounce from "@/hooks/useDebounce.tsx";

function ProjectOverview() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const filterOptions = [
    { label: "Newest Projects First", value: "creationDate&ascending=false" },
    { label: "Oldest Projects First", value: "creationDate&ascending=true" },
    { label: "Project Name (A–Z)", value: "name&ascending=true" },
    { label: "Project Name (Z–A)", value: "name&ascending=false" },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/skill`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const skillOptions: { label: string; value: string }[] = (data ?? []).map(
    (skill: { name: string }) => ({
      label: skill.name,
      value: skill.name,
    }),
  );

  const [sortBy, setSortBy] = useState("creationDate&ascending=false");
  const [filterBy, setFilterBy] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState("");

  const debounceSearchBy = useDebounce(searchBy, 500);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (value: string[]) => {
    setFilterBy(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBy(event.target.value);
  };

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full scroll-mt-20 flex-col p-4 md:max-w-5xl"
    >
      <h2 className="h2">Projects</h2>
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center justify-start space-x-2">
          <SearchInput
            value={searchBy}
            placeholder={"Search..."}
            onInput={handleSearchChange}
          ></SearchInput>
          <MultiSelect
            label="Skills"
            icon={<Funnel className="h-4 w-4" />}
            options={skillOptions}
            value={filterBy}
            onChange={handleFilterChange}
            isLoading={isLoading}
          ></MultiSelect>
          {(filterBy.length !== 0 || searchBy !== "") && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setFilterBy([]);
                setSearchBy("");
              }}
            >
              <X />
              Reset
            </Button>
          )}
        </div>
        <CustomSelect
          onChange={handleSortChange}
          options={filterOptions}
          value={sortBy}
          label="Sort by"
          icon={<ArrowDownUp className="h-4 w-4" />}
        ></CustomSelect>
      </div>
      <ProjectList
        sortBy={sortBy}
        filterBySkill={filterBy}
        searchBy={debounceSearchBy}
      ></ProjectList>
    </section>
  );
}

export default ProjectOverview;
