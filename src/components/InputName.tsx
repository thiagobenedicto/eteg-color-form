import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputName() {
  return (
    <TextField
      required
      id="userName"
      name="userName"
      label="Nome completo"
      fullWidth
      variant="standard"
      autoFocus
    />
  )
}