import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  serviceContainer: {
    padding: '3rem 0',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  serviceHeading: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  serviceItem: {
    padding: '1rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2rem',
    },
  },
  serviceImage: {
    width: '100%',
    height: '100%',
  },
  serviceTitle: {
    textAlign: 'center',
  },
}));
