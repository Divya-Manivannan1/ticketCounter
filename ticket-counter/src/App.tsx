import { team } from "./data/team";
import "./App.scss";
import { EmployeeTileContainer } from "./components/EmployeeTileContainer/EmployeeTileContainer";

function App() {
  return (
    <div className="app">
      <h1>Ticket Counter</h1>
      <EmployeeTileContainer employes={team} />
    </div>
  );
}

export default App;
