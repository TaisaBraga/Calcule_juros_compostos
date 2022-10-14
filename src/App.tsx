import "./App.css";
import HomePage from "./components/pages/HomePage";
import MonthlyCalculator from "./components/pages/MonthlyCalculator";
import YearlyCalculator from "./components/pages/YearlyCalculator";
import GetRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <h1>Calculadora de Juros Compostos</h1>
      <div>
        <HomePage />
      </div>
      <div className="calculator">
        <GetRoutes />
      </div>
    </div>
  );
}

export default App;
