import "./Counter.scss";
import {useState} from "react";
//import Button from "../Button/Button";


type CounterProps = {
  initialValue : number;
  owner : number;
  
};

const Counter = ({initialValue, owner,} : CounterProps) =>{

const [counter,setCounter] = useState<number>(initialValue);

  const handleIncrementClick =() => {
    setCounter (counter+1);};

  const handleDecrementClick =() => {
    if (counter> 0){
    setCounter (counter-1);}
  };

  return (
    <div className = "counter">
        
        <button className = "button--incDec"  onClick={handleIncrementClick}>+</button>
        <p className="counter__total">{counter}</p>
        <button className = "button--incDec" onClick={handleDecrementClick}>-</button>
       
    </div>
    );
};

export default Counter;


