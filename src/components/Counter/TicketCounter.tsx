import { useEffect, useState } from "react";
import "./TicketCounter.scss";
import { Button } from "../Button/Button";
import trash from "../../assets/images/trash-can-regular.svg";
import open from "../../assets/images/plus-solid.svg";
import close from "../../assets/images/xmark-solid.svg";
import reopen from "../../assets/images/rotate-left-solid.svg";

type ticketCounterProps = {
  empID: number;
};
export const TicketCounter = ({ empID }: ticketCounterProps) => {
  const [totalTickets, setTotalTickets] = useState<number>(
    localStorage.getItem(`total${empID}`)
      ? Number(localStorage.getItem(`total${empID}`))
      : 0
  );
  const [closedTickets, setClosedTickets] = useState<number>(
    localStorage.getItem(`closed${empID}`)
      ? Number(localStorage.getItem(`closed${empID}`))
      : 0
  );

  useEffect(() => {
    localStorage.setItem(`total${empID}`, `${totalTickets}`);
    localStorage.setItem(`closed${empID}`, `${closedTickets}`);
  }, [totalTickets, closedTickets]);

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
      <Button
        label={open}
        handleClick={handleNewTicket}
        status="active"
        tooltipContent="Open a new ticket"
      />
      <Button
        tooltipContent="Close an open ticket"
        label={close}
        handleClick={handleCloseTicket}
        status={closeStatus}
      />
      <Button
        tooltipContent="Delete an open ticket"
        label={trash}
        handleClick={handleRemoveOpenTicket}
        status={deleteStatus}
      />
      <Button
        tooltipContent="Reopen closed ticket"
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
