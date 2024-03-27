import "./Greeting.scss";


type GreetingProps = {
  dayTimeGreeting: string;
  todaysMessage? : string;
  name?: string;

};


  const GreetingMessage = ({dayTimeGreeting, todaysMessage} : GreetingProps) => {


    return (
      <div className = "greeting">
      <p className = "greeting-time">{dayTimeGreeting}</p> 
      <p className = "greeting-news">{todaysMessage}</p>
      </div>
    );
  };


  export default GreetingMessage;
  