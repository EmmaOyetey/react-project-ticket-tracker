//import Button from './components/Button/Button';
import "./EmployeeTile.scss";
import TeamType from "../../types/TeamType";
//import Counter from "../Counter/Counter";
//once counter imported may need to add in
type EmployeeTileProps = {
    team:TeamType[];
    //counter: number;
    };
    //then ensure that counter is passed in a parameter and teamtype is updated to EmployeeTileProps

const EmployeeTile = ({team} : EmployeeTileProps) => {

    const filterUserOut = team.filter( teamMember =>  teamMember.id !== 2); // Filters out team members whose ID is not equal to 2(user)
    
    return (
        <div className="employee-tile">
                {filterUserOut.map(teamMember => {
                    return (
                        <div className="employee-tile__content" key={teamMember.id}> 
                            <p>{teamMember.name as string}</p>
                            <p>{teamMember.role as string}</p>
                        </div>
                    );
                })}
        </div>
    );
};               {/* <Counter name = ""  role = ""/>  counter here or in app.tsx?*/}
        



export default EmployeeTile;