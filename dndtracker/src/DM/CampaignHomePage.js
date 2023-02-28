import React, { useState } from 'react';
import { campaigns } from '../Data/Campaigns';
import { useParams } from 'react-router-dom';
import {
  DialogTitle,
  Drawer,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReorderIcon from '@mui/icons-material/Reorder';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PetsIcon from '@mui/icons-material/Pets';
import NearbyErrorIcon from '@mui/icons-material/NearbyError';
import HomeIcon from '@mui/icons-material/Home';
import GradingIcon from '@mui/icons-material/Grading';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CampaignNotes from './CampaignNotes';
import CampaignCharacterPage from './CampaignCharacterPage';
import CampaignCitiesPage from './CampaignCitiesPage';
import CampaignDungeonPage from './CampaignDungeonPage';
import CampaignMonstersPage from './CampaignMonstersPage';

export const CampaignHomePage = () => {
  const params = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [componentDisplay, setComponentDisplay] = useState('notes');

  //const screen_height = window.innerHeight;
  const campaign = campaigns.find(
    (element) => element.id === params.campaignID
  );

  const onClose = () => {
    setDrawerOpen(false);
  };

  const componentToDisplay = (param) => {
    switch (param) {
      case 'notes':
        return <CampaignNotes campaign={campaign} />;
      case 'cities':
        return <CampaignCitiesPage />;
      case 'characters':
        return <CampaignCharacterPage />;
      case 'monsters':
        return <CampaignMonstersPage />;
      case 'dungeons':
        return <CampaignDungeonPage />;
    }
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={onClose}
        PaperProps={{
          sx: { width: '15%' },
        }}
      >
        <DialogTitle disableTypography className="drawerTitle">
          <IconButton onClick={onClose}>
            <ArrowBackIosIcon />
          </IconButton>
        </DialogTitle>
        <List component="nav" aria-label="main mailbox folders">
          <Grid item xs={10} sx={{ py: 2, px: 2, fontSize: 13 }}>
            <label>Navigation</label>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <ListItem component={Link} to={'/'} sx={{ color: '#000000' }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Home" />
          </ListItem>
          <ListItem component={Link} to={'/DM'} sx={{ color: '#000000' }}>
            <ListItemIcon>
              <GradingIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Campaigns" />
          </ListItem>

          <Grid item xs={10} sx={{ py: 2, px: 2, fontSize: 13 }}>
            <label>Tools</label>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <ListItem button onClick={() => setComponentDisplay('notes')}>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Notes" />
          </ListItem>
          <ListItem button onClick={() => setComponentDisplay('characters')}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Characters" />
          </ListItem>
          <ListItem button onClick={() => setComponentDisplay('cities')}>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Cities" />
          </ListItem>
          <ListItem button onClick={() => setComponentDisplay('dungeons')}>
            <ListItemIcon>
              <NearbyErrorIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Dungeons" />
          </ListItem>
          <ListItem button onClick={() => setComponentDisplay('monsters')}>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Monsters" />
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        onClick={() => {
          setDrawerOpen(true);
        }}
        size="large"
      >
        <ReorderIcon />
      </IconButton>
      <Typography variant="h1" align="center">
        {campaign.name}
      </Typography>
      {/* Screen contents */}
      {componentToDisplay(componentDisplay)}
    </div>
  );
};

export default CampaignHomePage;
