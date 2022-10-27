import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContentText, Grid } from "@mui/material";

interface StateValuesInformation {
  inicialCapital: string;
  fees: string;
  time: number;
}

const  CompoundInterestCalculator = () => {
  const [values, setValues] = useState<StateValuesInformation>(
    {} as StateValuesInformation
  );
  const [displayText, setDisplayText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const maskCurrency = (e: any): void => {
    let v = e.target.value.replace(/\D/g, "");
    v = (Number(v) / 10 ** 2).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/\d(?=(\d{3})+\,)/g, "$&.");

    setValues({ ...values, inicialCapital: v });
  };
  const maskCurrencyToFee = (e: any): void => {
    let f = e.target.value.replace(/\D/g, "");
    f = (Number(f) / 10 ** 2).toFixed(2) + "";
    f = f.replace(".", ",");
    f = f.replace(/\d(?=(\d{3})+\,)/g, "$&.");

    setValues({ ...values, fees: f });
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSubmit = (): void => {
    let inicialCapital: number = Number(
      values.inicialCapital.replace(".", "").replace(",", ".")
    );
    let fees: number = Number(values.fees.replace(".", "").replace(",", "."));
    let totalAmount: number = 0;
    totalAmount = inicialCapital * (1 + fees / 100) ** values.time;
    const result: string = totalAmount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setOpen(true);
    setDisplayText(result);
  };

  return (
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
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
        <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="fees">Juros (a.m)</InputLabel>
            <Input
              name="fees"
              placeholder="Digite a taxa de juros mensal"
              value={values.fees || ""}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              onChange={maskCurrencyToFee}
            />
          </FormControl>
        </Grid>

        <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-time">Período</InputLabel>
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
        disabled={!(values.fees && values.inicialCapital && values.time)}
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
            O valor total é: {displayText}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>X</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default  CompoundInterestCalculator;
