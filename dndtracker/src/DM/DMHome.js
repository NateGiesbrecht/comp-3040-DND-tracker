import React from 'react';
import { Typography, Button, Container } from '@mui/material';

import { Link } from 'react-router-dom';

//COmponents
import { DMHomeCard } from './DMHomeCard';
import { DMNewCampaignCard } from './DMNewCampaignCard';
import { campaigns } from '../Data/Campaigns';

const DMHome = () => {
  return (
    <>
      <Typography variant="h1" align="center">
        DM Home
      </Typography>

      <Container>
        <Button component={Link} to={'/'} variant="outlined">
          Home
        </Button>
        <DMHomeCard
          image={campaigns[0].photo}
          body={campaigns[0].description}
          title={campaigns[0].name}
          campaignID={campaigns[0].id}
        />
        <DMHomeCard
          image={campaigns[1].photo}
          body={campaigns[1].description}
          title={campaigns[1].name}
          campaignID={campaigns[1].id}
        />
        <DMNewCampaignCard />
      </Container>
    </>
  );
};

export default DMHome;
