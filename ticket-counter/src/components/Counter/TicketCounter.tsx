import { useState } from "react";
import "./TicketCounter.scss";
import { Button } from "../Button/Button";
import trash from "../../assets/images/trash-can-regular.svg";
import open from "../../assets/images/plus-solid.svg";
import close from "../../assets/images/xmark-solid.svg";
import reopen from "../../assets/images/rotate-left-solid.svg";

export const TicketCounter = () => {
  const [totalTickets, setTotalTickets] = useState<number>(0);
  const [closedTickets, setClosedTickets] = useState<number>(0);

  const handleNewTicket = () => {
    setTotalTickets(totalTickets + 1);
  };
  const handleCloseTicket = () => {
    totalTickets - closedTickets > 0 ? setClosedTickets(closedTickets + 1) : 0;
  };

  const handleRemoveOpenTicket = () => {
    totalTickets - closedTickets > 0 ? setTotalTickets(totalTickets - 1) : 0;
  };

  const handleReopenTicket = () => {
    closedTickets > 0 ? setClosedTickets(closedTickets - 1) : 0;
  };

  return (
    <div className="ticket-counter">
      <Button label={open} handleClick={handleNewTicket} />
      <Button label={close} handleClick={handleCloseTicket} />
      <Button label={trash} handleClick={handleRemoveOpenTicket} />
      <Button label={reopen} handleClick={handleReopenTicket} />

      <table className="ticket-counter__table">
        <tbody>
          <td>Open tickets:</td>
          <td>{totalTickets - closedTickets}</td>
        </tbody>
        <tbody>
          <td>Closed tickets:</td>
          <td>{closedTickets}</td>
        </tbody>
        <tbody>
          <td>Total tickets:</td>
          <td>{totalTickets}</td>
        </tbody>
      </table>
    </div>
  );
};
