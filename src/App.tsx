import "./App.css";
import InterestOptions from "./components/pages/InterestOptions";
import GetRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <h1>Calculadora de Juros Compostos</h1>
      <div className="container">
        <div className="interestOptions">
          <InterestOptions />
        </div>
        <div className="calculator">
          <GetRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
