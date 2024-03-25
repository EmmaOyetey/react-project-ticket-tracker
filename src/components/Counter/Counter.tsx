import "./Counter.scss";
import {useState} from "react";
import Button from "../Button/Button";


type CounterProps = {
  initialValue : number;
  owner : number;
};

const Counter = ({initialValue} : CounterProps) =>{

const [counter,setCounter] = useState<number>(initialValue);

  const handleIncrementClick =() => {
    setCounter (counter+1);};

  const handleDecrementClick =() => {
    if (counter> 0){
    setCounter (counter-1);}
  };

  return (
    <div className = "counter">
        <Button label = "+" style = "incDec"onClick={handleIncrementClick} />
        <p className="counter__total">{counter}</p>
        <Button label = " -" style = "incDec" onClick={handleDecrementClick} />
    </div>
    );
};

export default Counter;


