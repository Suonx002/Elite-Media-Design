import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  socialFeedContainer: {
    padding: '3rem 0',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  socialFeedHeading: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  socialFeedImageContainer: {
    // height: 300,
  },
  socialFeedImage: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  rightSideContainer: {
    padding: '1rem',
  },
  rightSideItem: {
    marginBottom: '1rem',
  },
  countItem: {
    marginRight: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0.5rem',
    },
  },
  visitWebsiteBtn: {
    color: theme.palette.common.white,
    textTransform: 'none',
  },
  loadingSpinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  },
  errorText: {
    textAlign: 'center',
    marginTop: '2rem',
  },
}));
