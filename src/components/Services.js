import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/ServicesStyles';

import SEO from '../assets/seo.svg';
import Website from '../assets/website.svg';
import Ecommerce from '../assets/ecommerce.svg';
import GraphicDesign from '../assets/graphicDesign.svg';
import EmailMarketing from '../assets/emailMarketing.svg';
import Photography from '../assets/photography.svg';
import Videography from '../assets/videography.svg';

const servicesList = [
  {
    name: 'Search Engine Optimization',
    icon: SEO,
  },
  {
    name: 'Website',
    icon: Website,
  },
  {
    name: 'E-commerce',
    icon: Ecommerce,
  },
  {
    name: 'Graphic Design',
    icon: GraphicDesign,
  },
  {
    name: 'Email Marketing',
    icon: EmailMarketing,
  },
  {
    name: 'Photography',
    icon: Photography,
  },
  {
    name: 'Videography',
    icon: Videography,
  },
];

const Services = () => {
  const classes = useStyles();
  return (
    <section className={classes.serviceContainer} id='services'>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.serviceHeading}>
          Services
        </Typography>
        <Grid container justify='center'>
          {servicesList.map((service) => (
            <Grid
              item
              key={service.name}
              md={3}
              sm={4}
              xs={6}
              className={classes.serviceItem}>
              <img
                src={service.icon}
                alt={service.name}
                className={classes.serviceImage}
              />
              <Typography variant='body1' className={classes.serviceTitle}>
                {service.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
