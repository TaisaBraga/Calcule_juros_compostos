import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from '@mui/material/Button';

// const useStyles = makeStyles(() => ({
//   Box: {

//   }
// }));

interface State {
  amount: number;
  fees: number;
  time: number;
}

const CalculatorPage = () => {
  //const classes = useStyles();
  const [values, setValues] = useState<State>({} as State);

  const handleAmountChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Box sx={{ width: 500}}>
      <FormControl fullWidth sx={{ m: 2}} variant="standard">
        <InputLabel htmlFor="standard-adornment-Capital-Amount">
          Capital Amount
        </InputLabel>
        <Input
          id="standard-adornment-Capital-Amount"
          value={values.amount}
          onChange={handleAmountChange("amount")}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          type="number"
        />
      </FormControl>
      <FormControl   fullWidth sx={{ m: 2}} variant="standard">
        <InputLabel htmlFor="standard-adornment-fees">Fees</InputLabel>
        <Input
          id="standard-adornment-fees"
          value={values.fees}
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
          type="number"
        />
      </FormControl>
      <FormControl  fullWidth sx={{ m: 2 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-time">Time</InputLabel>
        <Input
          id="standard-adornment-time"
          value={values.time}
          placeholder="Digite o período em meses"
          type="number"
        />
      </FormControl>
      <Button variant="outlined">Submit</Button>
    </Box>
  );
};

export default CalculatorPage;
