import { FormEvent, useState } from "react";
import { Employee } from "../../types/teamType";
import { EmployeeTile } from "../../components/EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";
import { EmployeeName } from "../../components/EmployeeName/EmployeeName";

type EmployeeTileContainerProps = {
  employees: Employee[];
  jobTitles: string[];
  displayCounter: boolean;
};

export const EmployeeTileContainer = ({
  employees,
  jobTitles,
  displayCounter,
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
  /* filteredEmployees = filteredEmployees.sort((emp1, emp2) =>
    emp1.name < emp2.name ? -1 : emp1.name > emp2.name ? 1 : 0
  ); */

  return (
    <main className="tile-container">
      <form className="tile-container__form" onChange={handleInput}>
        <label htmlFor="Name">
          Search by name:
          <input
            type="text"
            id="Name"
            autoComplete="off"
            className="tile-container__name-input"
          ></input>
        </label>
        <label htmlFor="Role">
          Search by role:
          <select id="Role" className="tile-container__role-input">
            {jobTitles.map((str, index) => (
              <option value={index} key={index}>
                {str}
              </option>
            ))}
          </select>
        </label>
      </form>
      <article className="tile-container__tiles">
        {displayCounter
          ? filteredEmployees.map((emp, index) => {
              return <EmployeeTile employee={emp} key={index} />;
            })
          : filteredEmployees.map((emp, index) => {
              return <EmployeeName employee={emp} key={index} />;
            })}
      </article>
    </main>
  );
};
