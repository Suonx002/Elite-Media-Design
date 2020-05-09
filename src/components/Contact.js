import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import useStyles from '../styles/ContactStyles';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const zoom = [14];
const coordinate = [-93.2740985, 44.9761901];

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactContainer}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.contactHeading}>
          Contact
        </Typography>
        <Grid container>
          <Grid
            item
            container
            direction='column'
            md={6}
            className={classes.contactItemContainer}>
            <Grid item className={classes.contactItem}>
              <Typography variant='body1'>
                Phone:{' '}
                <a href='tel:1-763-123-1234' className={classes.contactLink}>
                  763-123-1234
                </a>
              </Typography>
            </Grid>
            <Grid item className={classes.contactItem}>
              <Typography variant='body1'>
                Email:{' '}
                <a
                  href='mailto:info@elitemediadesign.com'
                  className={classes.contactLink}>
                  info@elitemediadesign.com
                </a>
              </Typography>
            </Grid>
            <Grid item className={classes.contactItem}>
              <Typography variant='body1'>
                Address: 80 S 8th St, Suite #005 Minneapolis, MN 55402
              </Typography>
            </Grid>
            <Grid item>
              <Map
                style='mapbox://styles/mapbox/streets-v9'
                className={classes.mapContainer}
                center={coordinate}
                zoom={zoom}>
                <Layer
                  type='circle'
                  id='marker'
                  paint={{
                    'circle-color': '#002f6c',
                    'circle-stroke-width': 12,
                    'circle-stroke-color': '#fff',
                    'circle-stroke-opacity': 1,
                  }}>
                  <Feature coordinates={coordinate} />
                </Layer>
              </Map>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction='column'
            md={6}
            className={classes.contactItemContainer}>
            <Grid item>
              <form>
                <Grid container direction='column'>
                  <Grid item className={classes.formItem}>
                    <TextField
                      fullWidth
                      variant='outlined'
                      required
                      id='name'
                      label='Name'
                    />
                  </Grid>
                  <Grid item className={classes.formItem}>
                    <TextField
                      fullWidth
                      variant='outlined'
                      required
                      id='email'
                      label='Email Address'
                    />
                  </Grid>
                  <Grid item className={classes.formItem}>
                    <TextField
                      fullWidth
                      variant='outlined'
                      required
                      id='Message'
                      label='Message'
                      multiline
                      rows={8}
                    />
                  </Grid>
                  <Grid item className={classes.formItem}>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.contactBtn}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
