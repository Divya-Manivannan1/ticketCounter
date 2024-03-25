import { Employee } from "../../types/teamType";
import { EmployeeTile } from "../EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";

type EmployeeTileContainerProps = {
  employes: Employee[];
};

export const EmployeeTileContainer = ({
  employes,
}: EmployeeTileContainerProps) => {
  let filteredEmployees: Employee[] = employes;
  const handleNameInput = (event: Event) => {
    filteredEmployees = filteredEmployees.filter((emp) =>
      emp.name.includes(value)
    );
  };
  return (
    <div className="tile-container">
      <input
        type="text"
        name="search by name"
        onInput={handleNameInput}
      ></input>
      {filteredEmployees.map((emp) => {
        return <EmployeeTile employee={emp} key={emp.id} />;
      })}
    </div>
  );
};
