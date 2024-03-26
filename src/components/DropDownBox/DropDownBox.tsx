import { ChangeEventHandler,} from "react";
import "./DropDownBox.scss";

type DropDownBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: ChangeEventHandler<HTMLSelectElement>;
  options : string[];
};

const DropDownBox = ({ label, searchTerm, handleInput }: DropDownBoxProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

//const jobRoles = Array.from(new Set(team.map(colleague => colleague.role)));

  return (
    <div className="search-box">
        <div className = "search-box__byRole">
        <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
        <select 
                id={label} 
                name={label}
                value={searchTerm} 
                onChange={handleInput} 
                className="search-box__dropdown"
                >
                <option value="">{label.toLowerCase()}...</option>
                {options .map((option : string, index : number) => (
                <option key={index} value={option}>
                    {option}
                    </option>
          ))}
        </select>
            
        </div>   
    </div>
  );
};

export default DropDownBox;