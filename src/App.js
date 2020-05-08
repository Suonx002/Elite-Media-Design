import React from 'react';

import Navbar from './components/Navbar';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './styles/Theme';

import Hero from './assets/hero.jpg';

const useStyles = makeStyles((theme) => ({
  app: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero}) no-repeat center center/cover`,
    height: '100vh',
    width: '100vw',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
