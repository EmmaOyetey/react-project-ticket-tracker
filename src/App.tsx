//import { useState } from 'react'

import './App.scss';
import team from './data/team';
import Teamtype from './types/TeamType';
import GreetingMessage from './components/Greeting/Greeting';
import Button from './components/Button/Button';
import EmployeeTile from './components/EmployeeTile/EmployeeTile';
//import EmployeeTile from './components/EmployeeTile/EmployeeTile';
// import team from "./data/team";

 //const [count, setCount] = useState(0) removed this from the boiler plate
//can move below to the component get greeting.
 //const getGreetingMessage = (hour: number): string => {
  //if (hour < 12) {
 //   return "Good Morning";
 // }
 // if (hour < 18) {
 //   return "Good Afternoon";
 /// }
 // return "Good Evening";
//};


const App = () => {



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
const employeeTiles = team.map(employee => {
  return <EmployeeTile key = {employee.id} name = {employee.name} role = {employee.role}/>
});
  
  // const currentUser = need to get user to input id and then assign current user to currentUser

  return (
    <div className = "app">
      <header className = "appName">
      <p className = "appName__heading">Waiheke Ticket Tracker</p>
      <GreetingMessage dayTimeGreeting = {dayTimeMessage} todaysMessage= {todaysMessage}/>
       {/* need to add user name here <p>{greetingMessage}</p> */}
      </header>
           {/*    <EmployeeTile name={team.name} role = {team.role}/> */}
      <section className = "counterSection">
      <Button label = "+" style = "incDec"/>
      <Button label = "-" style = "incDec"/>
      {employeeTiles}
      
      
      </section>



    </div>

  );
};

export default App
