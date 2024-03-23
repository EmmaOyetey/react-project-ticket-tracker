import "./Greeting.scss";


type GreetingProps = {
  dayTimeGreeting: string;
  todaysMessage? : string;
  name?: string;

};


  const GreetingMessage = ({dayTimeGreeting, todaysMessage} : GreetingProps) => {


    return (
      <div>
      <p>{dayTimeGreeting}</p> 
      <p>{todaysMessage}</p>
      </div>
    );
  };


  export default GreetingMessage;
  