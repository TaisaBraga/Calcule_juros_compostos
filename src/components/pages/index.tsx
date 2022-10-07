import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

interface StateValuesInformation {
  inicialCapital: number;
  fees: number;
  time: number;
}

const CalculatorPage = () => {
  const [values, setValues] = useState<StateValuesInformation>(
    {} as StateValuesInformation
  );

  const handleSubmit = (): void => {
    let totalAmount: number;

    totalAmount =
      values.inicialCapital * (1 + values.fees / 100) ** values.time;
    console.log(totalAmount.toFixed(2));
  };

  return (
    <Box sx={{ width: 500 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-inicialCapital">
              Inicial Capital
            </InputLabel>
            <Input
              id="standard-adornment-inicialCapital"
              name="inicialCapital"
              value={Number(values.inicialCapital) || ""}
              inputProps={{ inputMode: "numeric" }}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              onChange={(e) => {
                setValues({
                  ...values,
                  inicialCapital: Number(e.target.value),
                });
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-fees">
              Fees (a.m)
            </InputLabel>
            <Input
              id="standard-adornment-fees"
              name="fees"
              value={Number(values.fees) || ""}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
              type="number"
              onChange={(e) => {
                setValues({ ...values, fees: Number(e.target.value) });
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-time">Time</InputLabel>
            <Input
              id="standard-adornment-time"
              name="time"
              value={values.time || ""}
              placeholder="Digite o período em meses"
              type="number"
              onChange={(e) => {
                setValues({ ...values, time: Number(e.target.value) });
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{ marginTop: "2rem" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CalculatorPage;
function makeStyles(arg0: () => {}) {
  throw new Error("Function not implemented.");
}
