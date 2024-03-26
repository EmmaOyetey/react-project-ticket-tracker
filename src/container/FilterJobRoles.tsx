import { ChangeEvent, useState } from "react";
import DropDownBox from "../components/DropDownBox/DropDownBox";
import TeamType from "../types/TeamType";
import EmployeeTile from "../components/EmployeeTile/EmployeeTile";

type FilterByJobTypeProps = {
  team: TeamType[];
};

const FilterByJobType= ({team}: FilterByJobTypeProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSearchTerm(selectedValue);
  };

  const filteredColleagues = team.filter((team) =>
    team.role.toLowerCase() === searchTerm.toLowerCase()
  );


  const jobRoles = Array.from(new Set(team.map(colleague => colleague.role)));

  return (
    <>
      <DropDownBox
        label="job roles"
        handleInput={handleInput}
        searchTerm={searchTerm}
        options = {jobRoles}
      />
      <EmployeeTile team={filteredColleagues} />
    </>
  );
};

export default FilterByJobType;