import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  homepageContainer: {
    marginTop: '20rem',
    maxWidth: '700px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
    },
  },
  headingText: {
    color: theme.palette.common.white,
    marginBottom: '2rem',
  },
  getInTouchBtn: {
    color: theme.palette.common.white,
    textTransform: 'none',
    padding: '0.8rem 2rem',
    [theme.breakpoints.down('md')]: {
      padding: '0.75rem 1.9rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.7rem 1.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.65rem 1.7rem',
    },
  },
}));
