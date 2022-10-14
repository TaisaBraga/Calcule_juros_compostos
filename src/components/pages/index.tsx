import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  Grid,
} from "@mui/material";

interface StateValuesInformation {
  inicialCapital: string;
  fees: number;
  time: number;
}

const CalculatorPage = () => {
  const [values, setValues] = useState<StateValuesInformation>(
    {} as StateValuesInformation
  );
  const [displayText, setDisplayText] = useState("");

  const [open, setOpen] = useState(false);

  const maskCurrency = (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = (Number(v) / 10 ** 2).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/\d(?=(\d{3})+\,)/g, "$&.");

    setValues({ ...values, inicialCapital: v });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (): void => {
    let inicialCapital = Number(
      values.inicialCapital.replace(".", "").replace(",", ".")
    );
    let totalAmount: number = 0;
    totalAmount = inicialCapital * (1 + values.fees / 100) ** values.time;
    const result = totalAmount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setOpen(true);
    setDisplayText(result);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="inicialCapital">Valor Inicial</InputLabel>
            <Input
              name="inicialCapital"
              value={values.inicialCapital || ""}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              onChange={maskCurrency}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="standard-adornment-fees">
              Juros (a.a)
            </InputLabel>
            <Input
              id="standard-adornment-fees"
              name="fees"
              value={Number(values.fees) || undefined}
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
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="standard-adornment-time">Período</InputLabel>
            <Input
              id="standard-adornment-time"
              name="time"
              value={values.time || undefined}
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
        Calcular
      </Button>

      {displayText && (
        <Dialog open={open}>
          <DialogContentText
            sx={{
              padding: "80px",
              width: "200px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <DialogContentText sx={{lineHeight:"30px"}}>O valor total é: </DialogContentText>{" "}
            {displayText}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} >
              X
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default CalculatorPage;
