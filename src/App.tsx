//import { useState } from 'react'

import './App.scss';
//import team from "./data/team";

 //const [count, setCount] = useState(0) removed this from the boiler plate

const App = () => {
 
  let message = "hi";

  return (
    <div className = "app">
      <header className = "appName">
      <p className = "appName__heading">Waiheke Ticket Tracker</p>
      <p>{message}</p>
      </header>







    </div>

  );
};

export default App
