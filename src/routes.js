import { Route, Routes } from "react-router-dom";
import Monthly from "./components/pages/MonthlyCalculator";
//import Yearly from "./components/pages/YearlyCalculator";
import SimpleInterestCalculator from "./components/pages/SimpleInterestCalculator"

export default function GetRoutes() {
  return (
      <Routes>
        <Route path="/compoundInterest" element={<Monthly />} />
        {/* <Route path="/yearly" element={<Yearly />} /> */}
        <Route path="/SimpleInterestCalculator" element={<SimpleInterestCalculator />} />
      </Routes>
  );
}
