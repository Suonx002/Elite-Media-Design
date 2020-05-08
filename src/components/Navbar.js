import React from 'react';

import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import useStyles from '../styles/NavbarStyles';

import EliteMediaDesignLogo from '../assets/eliteMediaDesign.svg';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed' className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.logoContainer}>
            <img
              src={EliteMediaDesignLogo}
              alt='logo'
              className={classes.logo}
            />
          </IconButton>
          <ul className={classes.rightMenuContainer}>
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
          </ul>
        </Toolbar>
      </AppBar>
      <div className={classes.marginToolbar} />
    </>
  );
};

export default Navbar;
