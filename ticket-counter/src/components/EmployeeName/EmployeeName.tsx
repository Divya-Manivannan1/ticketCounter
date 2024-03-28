import { Link } from "react-router-dom";
import { Employee } from "../../types/teamType";
import "./EmployeeName.scss";

type EmployeeNameProps = {
  employee: Employee;
};

export const EmployeeName = ({ employee }: EmployeeNameProps) => {
  return (
    <div className="name-tile">
      <Link to={`/employee-profile/${employee.id}`}>
        <h2>{employee.name}</h2>
      </Link>
    </div>
  );
};
