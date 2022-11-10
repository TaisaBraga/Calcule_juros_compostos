import { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import {
  Dialog,
  DialogActions,
  DialogContentText,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'

interface StateValuesInformation {
  inicialCapital: string
  fees: string
  time: number
}

const CompoundInterestCalculator = () => {
  const [values, setValues] = useState<StateValuesInformation>(
    {} as StateValuesInformation
  )
  const [displayText, setDisplayText] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const maskCurrency = (e: any): void => {
    let v = e.target.value.replace(/\D/g, '')
    v = (Number(v) / 10 ** 2).toFixed(2) + ''
    v = v.replace('.', ',')
    v = v.replace(/\d(?=(\d{3})+\,)/g, '$&.')

    setValues({ ...values, inicialCapital: v })
  }
  const maskCurrencyToFee = (e: any): void => {
    let f = e.target.value.replace(/\D/g, '')
    f = (Number(f) / 10 ** 2).toFixed(2) + ''
    f = f.replace('.', ',')
    f = f.replace(/\d(?=(\d{3})+\,)/g, '$&.')

    setValues({ ...values, fees: f })
  }
  const handleClose = (): void => {
    setOpen(false)
  }

  const [feesValue, setFeesValue] = useState<string>('')
  const [timeValue, setTimeValue] = useState<string>('')

  const handleChangeFees = (event: SelectChangeEvent): void => {
    setFeesValue(event.target.value)
  }

  const handleChangeTime = (event: SelectChangeEvent): void => {
    setTimeValue(event.target.value)
  }

  const handleSubmit = (): void => {
    let inicialCapital: number = Number(
      values.inicialCapital.replace('.', '').replace(',', '.')
    )
    let fees: number = Number(values.fees.replace('.', '').replace(',', '.'))
    let totalAmount: number = 0
    let feesChanged: number = 0
    if (
      (feesValue === 'mensal' && timeValue === 'mensal') ||
      (feesValue === 'anual' && timeValue === 'anual')
    ) {
      totalAmount = inicialCapital * (1 + fees / 100) ** values.time
    } else if (feesValue === 'anual' && timeValue === 'meses') {
      let aux = Math.pow(1 + fees / 100, 1 / 12) - 1
      feesChanged = aux * 100
      totalAmount = inicialCapital * (1 + feesChanged / 100) ** values.time
    } else if (feesValue === 'mensal' && timeValue === 'anos') {
      let aux = Math.pow(1 + fees / 100, 12) - 1
      feesChanged = aux * 100
      totalAmount = inicialCapital * (1 + feesChanged / 100) ** values.time
    }
    let result: string = totalAmount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    setOpen(true)
    setDisplayText(result)
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="inicialCapital">Valor Inicial</InputLabel>
            <Input
              name="inicialCapital"
              value={values.inicialCapital || ''}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              onChange={maskCurrency}
            />
          </FormControl>
        </Grid>
        <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="fees">Juros</InputLabel>
            <Input
              name="fees"
              placeholder="Digite a taxa de juros mensal"
              value={values.fees || ''}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              onChange={maskCurrencyToFee}
            />
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={feesValue}
              onChange={handleChangeFees}
            >
              <MenuItem value={'anual'}>Anual</MenuItem>
              <MenuItem value={'mensal'}>Mensal</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-time">Período</InputLabel>
            <Input
              id="standard-adornment-time"
              name="time"
              value={values.time || ''}
              placeholder="Digite o período em meses"
              type="number"
              onChange={e => {
                setValues({ ...values, time: Number(e.target.value) })
              }}
            />
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={timeValue}
              onChange={handleChangeTime}
            >
              <MenuItem value={'anos'}>Anos</MenuItem>
              <MenuItem value={'meses'}>Meses</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{ marginTop: '2rem' }}
        disabled={!(values.fees && values.inicialCapital && values.time)}
      >
        Calcular
      </Button>

      {displayText && (
        <Dialog open={open}>
          <DialogContentText
            sx={{
              padding: '80px',
              width: '200px',
              textAlign: 'center',
              fontSize: '20px'
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
  )
}

export default CompoundInterestCalculator
