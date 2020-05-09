import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  companyContainer: {
    padding: '3rem 0',
    backgroundColor: theme.palette.secondary.main,
  },
  companyHeading: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.palette.common.white,
  },
  companyItem: {
    width: 200,
    marginRight: '0.5rem',
  },
  iconImage: {
    height: '100%',
    width: '100%',
  },
}));
