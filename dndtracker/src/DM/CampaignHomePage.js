import React, { useState } from 'react';
import { campaigns } from '../Data/Campaigns';
import { useParams } from 'react-router-dom';
import { DialogTitle, Drawer, IconButton, Grid } from '@mui/material';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReorderIcon from '@mui/icons-material/Reorder';

export const CampaignHomePage = () => {
  const params = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const campaign = campaigns.find(
    (element) => element.id === params.campaignID
  );

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Drawer anchor="left" open={drawerOpen} onClose={onClose}>
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
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Campaigns" />
          </ListItem>

          <Grid item xs={10} sx={{ py: 2, px: 2, fontSize: 13 }}>
            <label>Tools</label>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Characters" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Cities" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="Dungeons" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
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
      <p>{campaign.name}</p>
    </div>
  );
};

export default CampaignHomePage;
