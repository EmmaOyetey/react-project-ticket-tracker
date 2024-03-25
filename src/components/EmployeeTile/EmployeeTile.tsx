//import Button from './components/Button/Button';
//import "./EmployeeTile.scss";
import TeamType from "../../types/TeamType";
//import Counter from "../Counter/Counter";

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
                            <p>{teamMember.name as string}</p>
                            <p>{teamMember.role as string}</p>
                            <p>Total Tickets Completed = ${}</p>     
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