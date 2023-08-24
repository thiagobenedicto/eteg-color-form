import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputName from './InputName';
import InputCPF from './InputCPF';
import InputEmail from './InputEmail';
import SelectColor from './SelectColor';
import { AppBar, Paper, Toolbar } from '@mui/material';

const defaultTheme = createTheme();

export default function ColorForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      userName: data.get('userName'),
      color: data.get('select-color'),
      CPF: data.get('cpf')
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Paper variant='outlined'
            sx={{
              boxShadow: 3,
              borderRadius: 6,
              padding: 4,
              my: {
                xs: 2,
                md: 6
              }
            }}
            >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <ColorLensRoundedIcon />
              </Avatar>
              <Typography component="h1" variant="h4">
                Formulário de cadastro
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <InputName />
                <InputCPF />
                <InputEmail />
                <SelectColor />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                  Enviar
                </Button>

              </Box>
            </Box>
          </Paper>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}