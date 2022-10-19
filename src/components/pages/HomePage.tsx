import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  const [checked, setChecked] = useState("compoundInterest");

  const handleChange = (event) => {
    if (event.target.value === "compoundInterest") {
      setChecked(event.target.value);
      navigate("./compoundInterest");
    }else{
      setChecked(event.target.value);
      navigate("./SimpleInterestCalculator");
    }
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            checked={checked === "compoundInterest"}
            value="compoundInterest"
            control={<Radio />}
            label="Juros Compostos"
            onChange={handleChange}
          />
          <FormControlLabel
            checked={checked === "SimpleInterestCalculator"}
            value="SimpleInterestCalculator"
            control={<Radio />}
            label="Juros Simples"
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default HomePage;
