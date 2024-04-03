import { FormEvent, useState } from "react";
import { Employee } from "../../types/teamType";
import { EmployeeTile } from "../../components/EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";
import { EmployeeName } from "../../components/EmployeeName/EmployeeName";
import Input from "../../components/Input/Input";

type EmployeeTileContainerProps = {
  employees: Employee[];
  displayCounter: boolean;
};

export const EmployeeTileContainer = ({
  employees,
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
  const jobTitles: string[] = ["Any"];
  filteredEmployees.forEach((emp) => {
    if (!jobTitles.includes(emp.role)) {
      jobTitles.push(emp.role);
    }
  });
  if (searchInput[1] != 0) {
    filteredEmployees = filteredEmployees.filter((emp) =>
      emp.role.toLowerCase().includes(jobTitles[searchInput[1]].toLowerCase())
    );
  }
  filteredEmployees = filteredEmployees.sort((emp1, emp2) =>
    emp1.name < emp2.name ? -1 : emp1.name > emp2.name ? 1 : 0
  );

  return (
    <main className="tile-container">
      <form className="tile-container__form" onChange={handleInput}>
        <Input id="Name" />
        <Input id="Role" />
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
