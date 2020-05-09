import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  marginToolbar: {
    ...theme.mixins.toolbar,
  },
  appbar: {
    // backgroundColor: theme.palette.common.white,
  },
  logoContainer: {
    height: 75,
    width: 75,
    padding: 0,
    margin: '0.5rem 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  rightMenuContainer: {
    padding: 0,
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  rightMenuItem: {
    listStyle: 'none',
    '&:not(:last-child)': {
      marginRight: '0.75rem',
    },
  },
  rightMenuItemBtn: {
    textTransform: 'none',
  },
  drawerMenu: {
    marginLeft: 'auto',
  },
  drawerMenuIconContainer: {
    padding: 0,
    height: 35,
    width: 35,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerMenuIcon: {
    width: '100%',
    height: '100%',
    color: theme.palette.common.white,
  },
  listContainer: {
    width: 200,
    backgroundColor: theme.palette.secondary.main,
  },
  listItem: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeIconContainer: {
    width: 35,
    height: 35,
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    color: theme.palette.primary.main,
  },
  drawerGetInTouchBtn: {
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
