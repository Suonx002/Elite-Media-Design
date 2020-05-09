import React from 'react';

import { Container, Grid, Typography, IconButton } from '@material-ui/core';

import useStyles from '../styles/CompanyBannerStyles';

import Walmart from '../assets/walmart.png';
import BestBuy from '../assets/bestbuy.png';
import FleetFarm from '../assets/fleetFarm.png';
import Clamoutdoors from '../assets/clamOutdoors.png';
import Blackfishgear from '../assets/blackFishGear.jpg';

const companyBanners = [
  {
    name: 'Walmart',
    icon: Walmart,
  },
  {
    name: 'BestBuy',
    icon: BestBuy,
  },
  {
    name: 'FleetFarm',
    icon: FleetFarm,
  },
  {
    name: 'Clam',
    icon: Clamoutdoors,
  },
  {
    name: 'Blackfish',
    icon: Blackfishgear,
  },
];

const CompanyBrands = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.companyContainer}>
      <Typography variant='h3' className={classes.companyHeading}>
        Trusted by the world's leading companies
      </Typography>
      <Grid container justify='center' alignItems='center'>
        {companyBanners.map((company) => (
          <Grid item key={company.name} className={classes.companyItem}>
            <IconButton disabled>
              <img
                src={company.icon}
                alt={company.name}
                className={classes.iconImage}
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyBrands;
