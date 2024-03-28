import { team } from "./data/team";
import "./App.scss";
import { EmployeeTileContainer } from "./containers/EmployeeTileContainer/EmployeeTileContainer";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EmployeeProfile } from "./containers/EmployeeProfile/EmployeeProfile";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeTileContainer employees={team} displayCounter={false} />
            }
          />
          <Route
            path="/counter"
            element={
              <EmployeeTileContainer employees={team} displayCounter={true} />
            }
          />
          <Route
            path="/employee-profile/:empId"
            element={<EmployeeProfile employees={team} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
