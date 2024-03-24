//import Button from './components/Button/Button';
import "./EmployeeTile.scss";
import TeamType from "../../types/TeamType";
//import Counter from "../Counter/Counter";

const EmployeeTile = ({name, role} : TeamType) => {

    return(
        <div className = "EmployeeTile">
        <h1>{name}</h1>
        <h2>{role}</h2>
       {/* <Counter name = ""  role = ""/>  counter here or in app.tsx?*/}
        </div>
    );
};

export default EmployeeTile;