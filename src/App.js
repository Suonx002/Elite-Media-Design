import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './styles/Theme';

import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import CompanyBanner from './components/CompanyBanner';

import Hero from './assets/hero.jpg';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero}) no-repeat center center/cover`,
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.landingContainer}>
        <Navbar />
        <Homepage />
      </div>
      <CompanyBanner />
    </ThemeProvider>
  );
}

export default App;
