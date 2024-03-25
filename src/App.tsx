//import { useState } from 'react'

import './App.scss';
import team from './data/team';
import GreetingMessage from './components/Greeting/Greeting';
import EmployeeTile from './components/EmployeeTile/EmployeeTile';
import MyTile from './components/MyTile/MyTile';

//import { useState } from 'react';

 //const [count, setCount] = useState(0) removed this from the boiler plate
 //const getGreetingMessage = (hour: number): string => {

const App = () => {

//can move below to the component get greeting??

const getDayTimeMessage = (currentHour : number): string => {
  if (currentHour < 12) {
    return "Good Morning";
  }
  if (currentHour < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
};

const currentHour : number = new Date().getHours();
const dayTimeMessage = getDayTimeMessage(currentHour);  
const todaysMessage = "no new messages today";


  return (
    <div className = "app">
      <header className = "appName">
      <p className = "appName__heading">Waiheke Ticket Tracker</p>
      <GreetingMessage dayTimeGreeting = {dayTimeMessage} todaysMessage= {todaysMessage}/>
       {/* need to add user name here <p>{greetingMessage}</p> */}
      </header>
      <section className = "my-tile"></section>
      <MyTile team = {team}/>
      {/*}  {myTile} see code below adjust for login button and state*/}
     
      <section className= "employee-tiles"></section>
      <h2 className = "employee-tiles__heading">Team ticket Tracker</h2>
      <EmployeeTile team = {team} />
  
     



    </div>
  );
};

export default App


//alternative using .find
//const myInfo = team.find(employee => employee.id === 2); // Assuming your ID is 2
//const myTile = myInfo ? (
//  <EmployeeTile key={myInfo.id} name={myInfo.name} role={myInfo.role} />
//) : null;

//const filterMyColleagues = team.filter(colleague => {
//  return colleague.id !== 2; // Filters out team members whose ID is not equal to 2
//});

//const myColleaguesTiles =  filterMyColleagues.map(colleague =>{
 //return <EmployeeTile key = {colleague.id} name = {colleague.name} role = {colleague.role}/>
 //});

 //const employeeTiles = team.map(employee => {
//  return <EmployeeTile key = {employee.id} name = {employee.name} role = {employee.role}/>
//});
 
//const findMyTile = team.filter(team => {
//  return team.id === 4; 
 // console.log( myTile); {/*this will be my id = as entered and input read"*/}
//});

//const myTile = findMyTile.map(myinfo =>{
// return <EmployeeTile key = {myinfo.id} name = {myinfo.name} role = {myinfo.role}/>
//});






 // add in sort myColleaguesTiles by count descending
// const currentUser = need to get user to input id and then assign current user to currentUser remove hard code 4