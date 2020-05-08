import React from 'react';

import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../styles/NavbarStyles';

import EliteMediaDesignLogo from '../assets/eliteMediaDesign.svg';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <AppBar
        position='fixed'
        className={classes.appbar}
        elevation={0}
        // color='transparent'
      >
        <Toolbar>
          <IconButton className={classes.logoContainer} disableRipple>
            <img
              src={EliteMediaDesignLogo}
              alt='logo'
              className={classes.logo}
            />
          </IconButton>
          <ul className={classes.rightMenuContainer}>
            <li className={classes.rightMenuItem}>
              <Button color='primary' className={classes.rightMenuItemBtn}>
                Home
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button color='primary' className={classes.rightMenuItemBtn}>
                About
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button color='primary' className={classes.rightMenuItemBtn}>
                Services
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button color='primary' className={classes.rightMenuItemBtn}>
                Contact
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button
                variant='contained'
                color='secondary'
                className={classes.rightMenuItemBtn}
                style={{ color: theme.palette.common.white }}>
                Free Estimate
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <div className={classes.marginToolbar} />
    </>
  );
};

export default Navbar;
