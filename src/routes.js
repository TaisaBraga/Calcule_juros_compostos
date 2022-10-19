import { Route, Routes } from "react-router-dom";
import Monthly from "./components/pages/MonthlyCalculator";
import Yearly from "./components/pages/YearlyCalculator";

export default function GetRoutes() {
  return (
      <Routes>
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/yearly" element={<Yearly />} />
      </Routes>
  );
}
