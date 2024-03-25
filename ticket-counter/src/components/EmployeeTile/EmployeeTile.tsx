import { Employee } from "../../types/teamType";
import { TicketCounter } from "../Counter/TicketCounter";
import "./EmployeeTile.scss";

type EmployeeTileProps = {
  employee: Employee;
};

export const EmployeeTile = ({ employee }: EmployeeTileProps) => {
  return (
    <div className="tile">
      <h2>{employee.name}</h2>
      <h3>{employee.role}</h3>
      <TicketCounter />
    </div>
  );
};
