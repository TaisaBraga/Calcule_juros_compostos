import { Route, Routes } from "react-router-dom";
import CompoundInterestCalculator from "./components/pages/CompoundInterestCalculator";
import SimpleInterestCalculator from "./components/pages/SimpleInterestCalculator"

export default function GetRoutes() {
  return (
      <Routes>
        <Route path="/" element={<CompoundInterestCalculator />} />
        <Route path="/SimpleInterestCalculator" element={<SimpleInterestCalculator />} />
      </Routes>
  );
}
