import { team } from "./data/team";
import "./App.scss";
import { EmployeeTileContainer } from "./components/EmployeeTileContainer/EmployeeTileContainer";

function App() {
  const jobTitles: string[] = ["Any"];
  team.forEach((emp) => {
    if (!jobTitles.includes(emp.role)) {
      jobTitles.push(emp.role);
    }
  });

  return (
    <div className="app">
      <h1>Ticket Counter</h1>
      <EmployeeTileContainer employees={team} jobTitles={jobTitles} />
    </div>
  );
}

export default App;
