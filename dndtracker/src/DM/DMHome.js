import React from 'react';
import { Typography, Button, Container } from '@mui/material';

import { Link } from 'react-router-dom';

//COmponents
import { DMHomeCard } from './DMHomeCard';
import { DMNewCampaignCard } from './DMNewCampaignCard';

const images = [
  'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700685160.jpg',
  'https://www.colorwallpapers.com/uploads/wallpaper/dnd-wallpapers/width-853/9wBK7PK3k59A-dnd-beautiful-hd-desktop-wallpapers.jpg',
];

const bodies = [
  'Hades has fallen, the gods are under attack. The party mustfight to save olympus!',
  'The world is overrun by vampires, the party must fight to destroy them all.',
];

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
        <DMHomeCard image={images[0]} body={bodies[0]} title="Campaign 1" />
        <DMHomeCard image={images[1]} body={bodies[1]} title="Campaign 2" />
        <DMNewCampaignCard />
      </Container>
    </>
  );
};

export default DMHome;
