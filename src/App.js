import { ThemeProvider } from '@emotion/react';
import { Box, Container, CssBaseline, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { lightTheme, darkTheme } from './theming/index'

function App() {

  const [dark, setDark] = useState(true)

  const changeThemeHandler = () => {
    setDark(prev => !prev)
  }

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container sx={{
        width: '100%',
        minHeight: '100vh',
        margin: 'auto',
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
      }}>
        <Header changeTheme={changeThemeHandler} />
        <Box sx={{ padding: '0 3em' }}>
          <Paper sx={{ backgroundColor: "background.paper" }} elevation={3}>
            <Box sx={{ padding: '1em' }}>
              <Typography sx={{
                color: "text.primary"
              }} variant="h4">Naslov</Typography>
            </Box>
          </Paper>
        </Box>

      </Container>

    </ThemeProvider >
  );
}

export default App;
