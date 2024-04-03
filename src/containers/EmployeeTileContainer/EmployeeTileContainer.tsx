import { FormEvent, useState } from "react";
import { Employee } from "../../types/teamType";
import { EmployeeTile } from "../../components/EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";
import { EmployeeName } from "../../components/EmployeeName/EmployeeName";

type EmployeeTileContainerProps = {
  employees: Employee[];
  displayCounter: boolean;
};

export const EmployeeTileContainer = ({
  employees,
  displayCounter,
}: EmployeeTileContainerProps) => {
  const [searchInput, setSearchInput] = useState<[string, string]>(["", "Any"]);

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const name = event.currentTarget.Name.value.toLowerCase();
    const role = event.currentTarget.Role.value;
    setSearchInput([name, role]);
  };

  //filtering employees based on name
  let filteredEmployees: Employee[] = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchInput[0].toLowerCase())
  );

  //depending on the filtered employees, getting the dropdown list
  const jobTitles: string[] = [searchInput[1]];
  filteredEmployees.forEach((emp) => {
    if (!jobTitles.includes(emp.role)) {
      jobTitles.push(emp.role);
    }
  });

  //filtering the results based on role
  if (searchInput[1] != "Any") {
    filteredEmployees = filteredEmployees.filter((emp) =>
      emp.role.includes(searchInput[1])
    );
    //adding any to the role options
    jobTitles.push("Any");
  }

  //sorting the filtered result
  filteredEmployees = filteredEmployees.sort((emp1, emp2) =>
    emp1.name < emp2.name ? -1 : emp1.name > emp2.name ? 1 : 0
  );

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
              <option value={str} key={index}>
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
