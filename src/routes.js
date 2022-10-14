import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MonthlyCalculator from "./MonthlyCalculator";
import YearlyCalculator from "./YearlyCalculator";
import HomePage from "./components/pages/HomePage";

export default function GetRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yearly" element={<YearlyCalculator />} />
        <Route path="/monthly" element={<MonthlyCalculator />} />
      </Routes>
    </Router>
  );
}
