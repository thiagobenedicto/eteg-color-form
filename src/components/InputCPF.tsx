import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputCPF() {
  return (
    <TextField
      required
      id="cpf"
      name="cpf"
      label="CPF"
      fullWidth
      variant="standard"
    />
  )
}