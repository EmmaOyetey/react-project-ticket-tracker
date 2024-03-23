//import { useState } from 'react'

import './App.scss';
import GreetingMessage from './components/Greeting/Greeting';
//import team from "./data/team";

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

const currentHour : number = new Date().getHours();

const getDayTimeMessage = (currentHour : number): string => {
  if (currentHour < 12) {
    return "Good Morning";
  }
  if (currentHour < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
};

const dayTimeMessage = getDayTimeMessage(currentHour);  
const todaysMessage = "no new messages today";

  
  // const currentUser = need to get user to input id and then assign current user to currentUser

  return (
    <div className = "app">
      <header className = "appName">
      <p className = "appName__heading">Waiheke Ticket Tracker</p>
      <GreetingMessage dayTimeGreeting = {dayTimeMessage} todaysMessage= {todaysMessage}/>
       {/* need to add user name here <p>{greetingMessage}</p> */}
      </header>




    </div>

  );
};

export default App
