import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  aboutItemText: {
    padding: '1rem 1rem 1rem 0',
  },
  aboutItemImage: {
    padding: '1rem 0 1rem 1rem',
  },
  aboutHeading: {
    marginBottom: '1rem',
    textAlign: 'center',
  },
  aboutText: {
    marginBottom: '1rem',
  },
  aboutImage: {
    width: '100%',
  },
}));
