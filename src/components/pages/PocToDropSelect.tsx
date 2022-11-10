import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const PocToDropSelect = () => {
  const [age, setAge] = useState<string>('')

  const handleChange = (event: SelectChangeEvent): void => {
    setAge(event.target.value)
  }

  console.log(age)

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 100, display: 'flex' }}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'anual'}>Anual</MenuItem>
          <MenuItem value={'mensal'}>Mensal</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default PocToDropSelect
