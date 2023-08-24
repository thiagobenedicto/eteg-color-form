import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const colorOptions = [
  {
    label: "Vermelho",
    value: "vermelho",
  },
  {
    label: "Laranja",
    value: "laranja",
  },
  {
    label: "Amarela",
    value: "amarela",
  },
  {
    label: "Verde",
    value: "verde",
  },
  {
    label: "Azul",
    value: "azul",
  },
  {
    label: "Anil",
    value: "anil",
  },
  {
    label: "Violeta",
    value: "violeta",
  },
];


export default function SelectColor() {
  const [color, setColor] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        
        required
        fullWidth
        
      >
        <InputLabel id="select-color">Cor favorita</InputLabel>
        <Select
          name='select-color'
          labelId="select-color"
          id="select-color"
          value={color}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Nenhuma</em>
          </MenuItem>
          {colorOptions.map((color) => (
              <MenuItem key={color.value} value={color.value}>{color.label}</MenuItem>
            ))}

        </Select>
      </FormControl>
    </div>
  );
}