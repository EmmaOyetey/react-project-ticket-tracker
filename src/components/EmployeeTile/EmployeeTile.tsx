//import Button from './components/Button/Button';
import "./EmployeeTile.scss";
import TeamType from "../../types/TeamType";
import Counter from "../Counter/Counter";

type EmployeeTileProps = {
    team:TeamType[];
    };


const EmployeeTile = ({team} : EmployeeTileProps) => {

    const filterUserOut = team.filter( teamMember =>  teamMember.id !== 2); 
// Filters out team members whose ID is not equal to 2(user)
    
    return (
        <div className="employee-tile">
                {filterUserOut.map(teamMember => {
                    return (
                        <div className="employee-tile__content" key={teamMember.id}> 
                            <p className = "employee-tile__colleague-name">{teamMember.name as string}</p>
                            <p className = "employee-tile__job-role">{teamMember.role as string}</p>
                            <Counter  initialValue={0} owner = {teamMember.id}/> 
                        </div>
                    );
                })}
        </div>
    );
};               {/* <Counter name = ""  role = ""/>  counter here or in app.tsx?*/}
        



export default EmployeeTile;

    //then ensure that counter is passed in a parameter and teamtype is updated to EmployeeTileProps
    //once counter established may want to sort on counter value highest to lowest 
    //const highestCountTeamMember = [filterUserOut].sort(
    //(a, b) => parseFloat(b.count) - parseFloat(a.count)
    //);