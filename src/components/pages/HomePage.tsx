import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    tax: "",
    selector: "",
  });

  useEffect(() => {
    const { tax, selector } = formData;
    switch (true) {
      case tax === "monthly" && selector === "monthly":
        navigate("/monthly");
        break;

      case tax === "yearly" && selector === "yearly":
        navigate("/yearly");
        break;
        default:
      // ignore
    }
  }, [formData]);

  const handlePageChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  return (
    <div>
      <FormControl >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Mensal"
          name="radio-buttons-group"
          sx={{display:'flex', flexDirection: 'row'}}
        >
          <FormControlLabel
            name="tax"
            value="monthly"
            control={<Radio />}
            label="Taxa Mensal"
            onChange={handlePageChange}
          />
          <FormControlLabel
            name="tax"
            value="yearly"
            control={<Radio />}
            label="Taxa Anual"
            onChange={handlePageChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default HomePage