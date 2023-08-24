import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputEmail() {
  return (
    <TextField 
      required
      fullWidth
      variant="standard"
      id="email"
      label="E-mail"
      name="email"
      autoComplete="email"
    />
  )
}