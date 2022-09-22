import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { Landing } from "./Pages/Landing";
import { Survey } from "./Pages/Survey";

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#00B894',
        sub: '#00886e',
        dark: '#000000',
        darkSub: grey[500],
        light: '#ffffff',
      },
    },
    fonts: {
      heading: 'Oswald, sans-serif',
      body: 'Roboto, sans-serif',
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
      },
      h2: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      },
      h3: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
      },
      h4: {
        fontSize: 'clamp(1rem, 5vw, 1.3rem)',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/survey" element={<Survey setMode={setMode} mode={mode} />} />
      </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
