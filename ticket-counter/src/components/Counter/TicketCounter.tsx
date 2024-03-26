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

  const closeStatus = totalTickets - closedTickets > 0 ? "active" : "disabled";
  const deleteStatus = totalTickets - closedTickets > 0 ? "active" : "disabled";
  const reopenStatus = closedTickets > 0 ? "active" : "disabled";

  return (
    <div className="ticket-counter">
      <Button label={open} handleClick={handleNewTicket} status="active" />
      <Button
        label={close}
        handleClick={handleCloseTicket}
        status={closeStatus}
      />
      <Button
        label={trash}
        handleClick={handleRemoveOpenTicket}
        status={deleteStatus}
      />
      <Button
        label={reopen}
        handleClick={handleReopenTicket}
        status={reopenStatus}
      />

      <div className="ticket-counter__open">
        <p className="ticket-counter__counter">
          {totalTickets - closedTickets}
        </p>
        <p>Open tickets:</p>
      </div>

      <div className="ticket-counter__closed">
        <p className="ticket-counter__counter">{closedTickets}</p>
        <p>Closed tickets:</p>
      </div>

      <div className="ticket-counter__total">
        <p className="ticket-counter__counter">{totalTickets}</p>
        <p>Total tickets:</p>
      </div>
    </div>
  );
};
