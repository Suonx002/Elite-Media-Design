import React from 'react';

import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from '../styles/HomepageStyles';

const Homepage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container direction='column' className={classes.homepageContainer}>
        <Grid item>
          <Typography variant='h1' className={classes.headingText}>
            Our vision is to create a business world full of prosperity,
            meaning, and connection for all.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={classes.getInTouchBtn}>
            Get In Touch
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
