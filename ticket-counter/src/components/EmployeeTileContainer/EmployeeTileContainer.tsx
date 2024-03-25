import { team } from "../../data/team.ts";
import { Employee } from "../../types/teamType";
import { FormEvent, useState } from "react";
import { EmployeeTile } from "../EmployeeTile/EmployeeTile";
import "./EmployeeTileContainer.scss";

export const EmployeeTileContainer = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };

  const filteredEmployees: Employee[] = team.filter((emp) =>
    emp.name.toLowerCase().includes(searchInput)
  );

  return (
    <div className="tickets-display">
      <div className="search-options">
        <input type="text" name="search by name" onChange={handleInput}></input>
      </div>
      <div className="tile-container">
        {filteredEmployees.map((emp) => {
          return <EmployeeTile employee={emp} key={emp.id} />;
        })}
      </div>
    </div>
  );
};
