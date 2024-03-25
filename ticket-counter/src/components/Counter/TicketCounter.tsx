import { useState } from "react";
import "./TicketCounter.scss";

export const TicketCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleDecrementCounter = () => {
    counter > 0 ? setCounter(counter - 1) : 0;
  };
  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="ticket-counter">
      <p>Tickets</p>
      <div className="counter-container">
      <button onClick={handleDecrementCounter} className="button button-down">
        D
      </button>
      <p>{counter}</p>
      <button onClick={handleIncrementCounter} className="button button-down">
        I
      </button>
      </div>
    </div>
  );
};
