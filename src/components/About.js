import React from 'react';

import { Grid, Typography, Container } from '@material-ui/core';

import useStyles from '../styles/AboutStyles';

import AboutImage from '../assets/about.svg';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.aboutHeading}>
          About Us
        </Typography>
        <Grid container>
          <Grid item md={6} className={classes.aboutItemText}>
            <Typography variant='body1' className={classes.aboutText}>
              EMD was founded in 2005 in a garage when two college roommates,
              Henry and John, puttheir minds together to create all things web
              related. The office, now located in the IDS Center indowntown
              Minneapolis, has over 30 employees.
            </Typography>
            <Typography variant='body1' className={classes.aboutText}>
              We strive to deliver value in our service, and to understand with
              respect all of our clients needs and toprovide a partnership that
              is created when we host our clients ​web​ services, develop their
              site, markettheir product/service or simply give them advice.
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.aboutItemImage}>
            <img
              src={AboutImage}
              alt='responsive devices'
              className={classes.aboutImage}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
