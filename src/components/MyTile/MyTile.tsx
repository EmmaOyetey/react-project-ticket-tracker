import "./MyTile.scss";
import TeamType from "../../types/TeamType";
import Counter from "../Counter/Counter";

type MyTileProps = {
    team:TeamType[];
    };


const MyTile = ({team} : MyTileProps) => {

    const myTile = team.find( myTile  =>  myTile.id === 2); 
// Filters out team members whose ID is not equal to 2(user)- need to add in user id input    
if (!myTile) { return "tile not found"};         
return (
            <div className="my-tile__content">
                    <p className = "my-tile__name">{myTile.name}</p>
                    <Counter owner = {myTile.id} initialValue = {0} />
                    <p className = "my-tile__info"> Record completed Tickets</p>     
            </div>
        );
};

export default MyTile;




{/* <Counter name = ""  role = ""/>  counter here or in app.tsx?*/}
       