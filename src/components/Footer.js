import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from '../styles/FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <Typography variant='body1' align='center'>
        Created by Vuthy Suon
      </Typography>
    </footer>
  );
};

export default Footer;
