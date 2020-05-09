import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  marginToolbar: {
    ...theme.mixins.toolbar,
  },
  appbar: {
    backgroundColor: theme.palette.common.white,
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
}));
