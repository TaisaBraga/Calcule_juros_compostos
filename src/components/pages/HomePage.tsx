import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  
  return (
    <div>
      <FormControl >
        <RadioGroup
          defaultValue="Mensal"
          name="radio-buttons-group"
          sx={{display:'flex', flexDirection: 'row'}}
        >
          <FormControlLabel
            value="monthly"
            control={<Radio />}
            label="Taxa Mensal"
            onChange={() => navigate('/monthly')}
          />
          <FormControlLabel
            value="yearly"
            control={<Radio />}
            label="Taxa Anual"
            onChange={() => navigate('/yearly')}
            
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default HomePage