import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  contactContainer: {
    padding: '3rem 0',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  contactHeading: {
    textAlign: 'center',
    marignBottom: '1rem',
  },
  contactItemContainer: {
    padding: '1rem',
  },
  contactItem: {
    marginBottom: '1rem',
  },
  mapContainer: {
    height: 265,
  },
  contactLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    },
    '&:active': {
      color: theme.palette.common.white,
    },
  },
  formItem: {
    marginBottom: '1rem',
    width: '100%',
  },

  contactBtn: {
    textTransform: 'none',
    padding: '0.8rem 2.5rem',
  },
}));
