import { FormEvent, useState } from "react";
import { Employee } from "../../types/teamType";
import { EmployeeTile } from "../EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";

type EmployeeTileContainerProps = {
  employees: Employee[];
  jobTitles: string[];
};

export const EmployeeTileContainer = ({
  employees,
  jobTitles,
}: EmployeeTileContainerProps) => {
  const [searchInput, setSearchInput] = useState<[string, number]>(["", 0]);

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const name = event.currentTarget.Name.value.toLowerCase();
    const role = event.currentTarget.Role.value.toLowerCase();
    setSearchInput([name, role]);
  };

  let filteredEmployees: Employee[] = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchInput[0].toLowerCase())
  );
  if (searchInput[1] != 0) {
    filteredEmployees = filteredEmployees.filter((emp) =>
      emp.role.toLowerCase().includes(jobTitles[searchInput[1]].toLowerCase())
    );
  }

  return (
    <main className="tile-container">
      <form className="tile-container__form" onChange={handleInput}>
        <label htmlFor="Name">Search by name:</label>
        <input type="text" id="Name" autoComplete="off"></input>
        <label htmlFor="Role">Search by role:</label>
        <select id="Role">
          {jobTitles.map((str, index) => (
            <option value={index} key={index}>
              {str}
            </option>
          ))}
        </select>
      </form>
      <article className="tile-container__tiles">
        {filteredEmployees.map((emp, index) => {
          return <EmployeeTile employee={emp} key={index} />;
        })}
      </article>
    </main>
  );
};
