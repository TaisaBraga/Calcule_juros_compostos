import "./App.css";
import HomePage from "./components/pages/HomePage";
import YearlyCalculator from "./components/pages/YearlyCalculator";

function App() {
  return (
    <div className="App">
      <h1>Calculadora de Juros Compostos</h1>
      <div >
      <HomePage />
      </div>
      <div className="calculator">
        <YearlyCalculator/>
      </div>
    </div>
  );
}

export default App;
