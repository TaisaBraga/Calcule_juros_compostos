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
  const [checked, setChecked] = useState("monthly");

  const handleChange = (event) => {
    if (event.target.value === "monthly") {
      setChecked(event.target.value);
      navigate("./monthly");
    }else{
      setChecked(event.target.value);
      navigate("./yearly");
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
            checked={checked === "monthly"}
            value="monthly"
            control={<Radio />}
            label="Taxa Mensal"
            onChange={handleChange}
          />
          <FormControlLabel
            checked={checked === "yearly"}
            value="yearly"
            control={<Radio />}
            label="Taxa Anual"
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default HomePage;
