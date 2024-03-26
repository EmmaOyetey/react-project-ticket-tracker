import { ChangeEvent, useState } from "react";
import DropDownBox from "../components/DropDownBox/DropDownBox";
import TeamType from "../types/TeamType";
import EmployeeTile from "../components/EmployeeTile/EmployeeTile";

type FilterJobRolesProps = {
  team: TeamType[];
};

const FilterJobRoles= ({team}: FilterJobRolesProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput2 = (event: ChangeEvent<HTMLSelectElement>) => {
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
        label="Find Tickets By Job Role"
        handleInput2={handleInput2}
        searchTerm={searchTerm}
        items = {jobRoles}
      />
      <EmployeeTile team={filteredColleagues} />
    </>
  );
};

export default FilterJobRoles;