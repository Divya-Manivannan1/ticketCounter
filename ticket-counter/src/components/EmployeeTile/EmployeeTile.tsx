import { Link } from "react-router-dom";
import { Employee } from "../../types/teamType";
import { TicketCounter } from "../Counter/TicketCounter";
import "./EmployeeTile.scss";

type EmployeeTileProps = {
  employee: Employee;
};

export const EmployeeTile = ({ employee }: EmployeeTileProps) => {
  return (
    <div className="tile">
      <Link to={`/employee-profile/${employee.id}`}>
        <h2>{employee.name}</h2>
      </Link>
      <h3>{employee.role}</h3>
      <TicketCounter />
    </div>
  );
};
