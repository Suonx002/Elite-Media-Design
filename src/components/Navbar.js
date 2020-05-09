import React, { useState } from 'react';
import { Link } from 'react-scroll';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from '../styles/NavbarStyles';

import EliteMediaDesignLogo from '../assets/eliteMediaDesign.svg';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <nav className={classes.drawerMenu}>
      <IconButton
        className={classes.drawerMenuIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(true)}>
        <MenuIcon className={classes.drawerMenuIcon} />
      </IconButton>
      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List className={classes.listContainer} disablePadding>
          <ListItem
            button
            divider
            className={classes.closeContainer}
            disableRipple>
            <ListItemIcon className={classes.closeIconContainer}>
              <CloseIcon
                className={classes.iconContainer}
                onClick={() => setOpenDrawer(false)}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem
            button
            component={Link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            to='home'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem
            button
            component={Link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            to='about'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='About' />
          </ListItem>
          <ListItem
            button
            component={Link}
            spy={true}
            smooth={true}
            duration={600}
            to='services'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Services' />
          </ListItem>
          <ListItem
            button
            component={Link}
            spy={true}
            smooth={true}
            duration={600}
            to='contact'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Contact' />
          </ListItem>
          <ListItem
            button
            className={classes.drawerGetInTouchBtn}
            rel='noopener noreferrer'
            target='_blank'
            component='a'
            href='mailto:info@elitemediadesign.com'
            onClick={() => setOpenDrawer(false)}>
            <ListItemText primary='Get In Touch' />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );

  return (
    <nav>
      <AppBar
        position='fixed'
        className={classes.appbar}
        elevation={0}
        // color='transparent'
        color='secondary'>
        <Toolbar>
          <IconButton className={classes.logoContainer} disableRipple href='/'>
            <img
              src={EliteMediaDesignLogo}
              alt='logo'
              className={classes.logo}
            />
          </IconButton>

          {matchesSM ? (
            drawer
          ) : (
            <ul className={classes.rightMenuContainer}>
              <li className={classes.rightMenuItem}>
                <Button
                  color='primary'
                  component={Link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  to='home'
                  className={classes.rightMenuItemBtn}>
                  Home
                </Button>
              </li>
              <li className={classes.rightMenuItem}>
                <Button
                  color='primary'
                  component={Link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  to='about'
                  className={classes.rightMenuItemBtn}>
                  About
                </Button>
              </li>
              <li className={classes.rightMenuItem}>
                <Button
                  color='primary'
                  component={Link}
                  spy={true}
                  smooth={true}
                  duration={600}
                  to='services'
                  className={classes.rightMenuItemBtn}>
                  Services
                </Button>
              </li>
              <li className={classes.rightMenuItem}>
                <Button
                  color='primary'
                  component={Link}
                  spy={true}
                  smooth={true}
                  duration={600}
                  to='contact'
                  className={classes.rightMenuItemBtn}>
                  Contact
                </Button>
              </li>
              <li className={classes.rightMenuItem}>
                <Button
                  variant='contained'
                  color='primary'
                  rel='noopener noreferrer'
                  target='_blank'
                  component='a'
                  href='mailto:info@elitemediadesign.com'
                  className={classes.rightMenuItemBtn}
                  style={{ color: theme.palette.common.white }}>
                  Get In Touch
                </Button>
              </li>
            </ul>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.marginToolbar} />
    </nav>
  );
};

export default Navbar;
