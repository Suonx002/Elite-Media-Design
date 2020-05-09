import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  CircularProgress,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../styles/SocialFeedStyles';

const SocialFeed = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://www.instagram.com/nfl/?__a=1');
      const data = await res.data.graphql.user;
      setFeeds((prevState) => [...prevState, data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  // adding comma
  const numberWithCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  useEffect(() => {
    fetchData();

    //run once
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.socialFeedContainer}>
      <Container maxWidth='lg'>
        <Typography variant='h2' className={classes.socialFeedHeading}>
          Instagram Social Feed
        </Typography>

        {loading === false && feeds.length > 0 ? (
          feeds.map((feed) => (
            <Grid container key={feed.id}>
              <Grid
                item
                container
                justify={matchesSM ? 'center' : undefined}
                md={4}
                className={classes.rightSideContainer}>
                <img
                  src={feed.profile_pic_url_hd}
                  alt={feed.username}
                  className={classes.socialFeedImage}
                />
              </Grid>
              <Grid
                item
                container
                direction='column'
                md={8}
                className={classes.rightSideContainer}>
                <Grid item className={classes.rightSideItem}>
                  <Typography variant='h3'>{feed.full_name}</Typography>
                </Grid>
                <Grid item className={classes.rightSideItem}>
                  <Button
                    variant='contained'
                    color='secondary'
                    href={feed.external_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.visitWebsiteBtn}>
                    Visit Website
                  </Button>
                </Grid>
                <Grid item className={classes.rightSideItem}>
                  <Typography variant='body1'>
                    Biography: {feed.biography}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  className={classes.rightSideItem}
                  direction={matchesSM ? 'column' : 'row'}>
                  <Grid item className={classes.countItem}>
                    <Typography variant='body1'>
                      following: {numberWithCommas(feed.edge_follow.count)}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.countItem}>
                    <Typography variant='body1'>
                      followers: {numberWithCommas(feed.edge_followed_by.count)}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.countItem}>
                    <Typography variant='body1'>
                      followed by viewer: {feed.followed_by_viewer || 'false'}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.countItem}>
                    <Typography variant='body1'>
                      follow viewer: {feed.follows_viewer || 'false'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))
        ) : loading === false && error.length > 0 ? (
          <Typography variant='body1' className={classes.errorText}>
            {error}
          </Typography>
        ) : (
          <div className={classes.loadingSpinner}>
            <CircularProgress color='secondary' size={65} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default SocialFeed;
