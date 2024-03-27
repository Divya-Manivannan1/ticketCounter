import { Link } from "react-router-dom";
import { Employee } from "../../types/teamType";
import "./EmployeeTile.scss";

type EmployeeNameProps = {
  employee: Employee;
};

export const EmployeeName = ({ employee }: EmployeeNameProps) => {
  return (
    <div className="tile">
      <Link to={`/employee-profile/${employee.id}`}>
        <h2>{employee.name}</h2>
      </Link>
      <h3>{employee.role}</h3>
    </div>
  );
};
