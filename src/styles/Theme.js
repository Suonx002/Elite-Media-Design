import { createMuiTheme } from '@material-ui/core';

const primaryColor = '#002f6c';
const secondaryColor = '#F0AD4E';

export default createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1.8rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
    },
  },
});
