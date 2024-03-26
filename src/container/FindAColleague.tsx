import { FormEvent, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import TeamType from "../types/TeamType";
import EmployeeTile from "../components/EmployeeTile/EmployeeTile";

type FindAColleagueProps = {
  team: TeamType[];
};

const FindAColleague= ({team}: FindAColleagueProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredColleagues = team.filter((team) =>
    team.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <SearchBox
        label="Enter a colleague's name to check out their performance"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      {searchTerm && <EmployeeTile team={filteredColleagues} />}
    </>
  );
};

export default FindAColleague;