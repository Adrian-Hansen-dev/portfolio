import { useState } from "react";
import ProjectList from "./ProjectList.tsx";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownUp, Funnel, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import SearchInput from "@/components/custom/SearchInput.tsx";
import MultiSelect from "@/components/custom/MultiSelect.tsx";
import CustomSelect from "@/components/custom/CustomSelect.tsx";

function ProjectOverview() {
  const filterOptions = [
    { label: "Project Name (A–Z)", value: "name&ascending=true" },
    { label: "Project Name (Z–A)", value: "name&ascending=false" },
    { label: "Newest Projects First", value: "creationDate&ascending=false" },
    { label: "Oldest Projects First", value: "creationDate&ascending=true" },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/skill");
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

  const [sortBy, setSortBy] = useState("name&ascending=true");
  const [filterBy, setFilterBy] = useState<string[]>([]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (value: string[]) => {
    setFilterBy(value);
  };

  return (
    <div className="mx-4 flex w-full flex-col md:mx-0 md:max-w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-2">
          <SearchInput></SearchInput>
          <MultiSelect
            label="Skills"
            icon={<Funnel className="h-4 w-4" />}
            options={skillOptions}
            value={filterBy}
            onChange={handleFilterChange}
            isLoading={isLoading}
          ></MultiSelect>
          {filterBy.length !== 0 && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setFilterBy([])}
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
      <ProjectList sortBy={sortBy} filterBySkill={filterBy}></ProjectList>
    </div>
  );
}

export default ProjectOverview;
