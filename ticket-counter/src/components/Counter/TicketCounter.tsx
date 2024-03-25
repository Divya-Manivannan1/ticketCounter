import { useState } from "react";
import "./TicketCounter.scss";
import { Button } from "../Button/Button";

export const TicketCounter = () => {
  const [totalTickets, setTotalTickets] = useState<number>(0);
  const [closedTickets, setClosedTickets] = useState<number>(0);

  const handleNewTicket = () => {
    setTotalTickets(totalTickets + 1);
  };
  const handleCloseTicket = () => {
    setClosedTickets(closedTickets + 1);
  };

  const handleRemoveOpenTicket = () => {
    setTotalTickets(totalTickets - 1);
  };

  const handleReopenTicket = () => {
    setClosedTickets(closedTickets - 1);
  };

  return (
    <div className="ticket-counter">
      <Button label="Add a new ticket" handleClick={handleNewTicket} />
      {totalTickets - closedTickets > 0 ? (
        <Button label="Close a ticket" handleClick={handleCloseTicket} />
      ) : (
        <span />
      )}
      {totalTickets - closedTickets > 0 ? (
        <Button
          label="Remove an open ticket"
          handleClick={handleRemoveOpenTicket}
        />
      ) : (
        <span />
      )}
      {closedTickets > 0 ? (
        <Button
          label="Reopen a closed ticket"
          handleClick={handleReopenTicket}
        />
      ) : (
        <span />
      )}
      <table>
        <tr>
          <td>Open tickets:</td>
          <td>{totalTickets - closedTickets}</td>
        </tr>
        <tr>
          <td>Closed tickets:</td>
          <td>{closedTickets}</td>
        </tr>
        <tr>
          <td>Total tickets:</td>
          <td>{totalTickets}</td>
        </tr>
      </table>
    </div>
  );
};
