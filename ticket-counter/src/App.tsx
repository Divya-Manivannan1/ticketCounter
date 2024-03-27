import { team } from "./data/team";
import "./App.scss";
import { EmployeeTileContainer } from "./containers/EmployeeTileContainer/EmployeeTileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeProfile } from "./containers/EmployeeProfile/EmployeeProfile";
import Nav from "./components/Nav/Nav";

function App() {
  const jobTitles: string[] = ["Any"];
  team.forEach((emp) => {
    if (!jobTitles.includes(emp.role)) {
      jobTitles.push(emp.role);
    }
  });

  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeTileContainer employees={team} jobTitles={jobTitles} />
            }
          />
          <Route
            path="/employee-profile/:empId"
            element={<EmployeeProfile employees={team} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
