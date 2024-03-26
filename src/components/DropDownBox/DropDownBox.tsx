import { ChangeEventHandler,} from "react";
import "./DropDownBox.scss";

type DropDownBoxProps = {
  label: string;
  searchTerm: string;
  items: string[];
  handleInput2: ChangeEventHandler<HTMLSelectElement>;
};

const DropDownBox = ({ label, searchTerm, items, handleInput2 }: DropDownBoxProps) => {
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
            onChange={handleInput2} 
            className="search-box__dropdown"
            >
            <option value = "" >Select a Job Role</option>
                {items.map((item : string, index : number) => (
                <option key={index} value={item}>
                    {item}
                    </option> 
          ))} */
        </select>
            
        </div>   
    </div>
  );
};

export default DropDownBox;