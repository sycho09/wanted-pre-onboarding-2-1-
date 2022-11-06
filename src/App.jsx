import React from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './router';
import theme from './styles/theme';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
