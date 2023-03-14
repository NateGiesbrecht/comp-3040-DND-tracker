/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Stack,
  TextField,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
  Avatar,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CampaignCitiesPage = (props) => {
  const { campaign, componentToDisplay, indexToUse } = props;
  const [selectedIndex, setSelectedIndex] = useState(indexToUse ?? 0);
  const [bio, setBio] = useState('');
  const [story, setStory] = useState('');

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    setStory(campaign.cities[selectedIndex].story);
    setBio(campaign.cities[selectedIndex].bio);
  }, [selectedIndex]);

  const handleOnBlur = (e, type) => {
    console.log(selectedIndex);
    switch (type) {
      case 'bio':
        campaign.cities[selectedIndex].bio = e.target.value;
        break;
      case 'story':
        campaign.cities[selectedIndex].story = e.target.value;
        break;
    }
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid lg={2}>
          <Grid item xs={12} sx={{ px: 2 }}>
            <label>Cities</label>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <List fullWidth>
              {campaign.cities.map((city, index) => (
                <ListItem
                  key={city.id}
                  // onClick={() => handleItemClick(index)}
                  // sx={{
                  //   cursor: 'pointer',
                  //   backgroundColor: index === selectedIndex ? '#f5f5f5' : '',
                  //   '&:hover': {
                  //     backgroundColor: '#f5f5f5',
                  //   },
                  // }}
                >
                  <ListItemText
                    primary={city.name}
                    //primary={character.name}
                  />
                  <ListItemIcon
                  // onClick={() => {
                  //   alert(
                  //     'Deleting Linked Dungeons currently under development'
                  //   );
                  // }}
                  >
                    {/* <Delete /> */}
                  </ListItemIcon>
                </ListItem>
              ))}
              {/* <ListItem
                onClick={() => {
                  alert('Adding new cities is currently under development');
                }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <ListItemText primary="Add a new city" />
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
              </ListItem> */}
            </List>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={7} lg={3}>
          <Stack
            spacing={1}
            flex="1 0 0"
            sx={{ marginTop: '1%', marginLeft: '5%' }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginBottom: '60px' }}
            >
              <Stack>
                <Avatar
                  src={campaign.cities[selectedIndex].avatar}
                  sx={{
                    width: 250,
                    height: 250,
                    marginTop: '15%',
                  }}
                />
                <Typography align="center" variant="h5">
                  {campaign.cities[selectedIndex].name}
                </Typography>
              </Stack>
            </Box>
            <Typography variant="h4" align="center">
              NPCs
            </Typography>
            <Box fullWidth sx={{ border: 1, height: '325px' }}>
              <List fullWidth>
                {campaign.cities[selectedIndex].linkedCharacters.map(
                  (linkedNpc, index) => (
                    <ListItem
                      key={linkedNpc}
                      onClick={() =>
                        componentToDisplay('characters', linkedNpc)
                      }
                      sx={{
                        cursor: 'pointer',
                        backgroundColor:
                          index === selectedIndex ? '#f5f5f5' : '',
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      <ListItemText
                        primary={campaign.characters[linkedNpc].name}
                        //primary={character.name}
                      />
                      <ListItemIcon
                        onClick={() => {
                          alert(
                            "Deleting Linked NPC's currently under development"
                          );
                        }}
                      >
                        <Delete />
                      </ListItemIcon>
                    </ListItem>
                  )
                )}
                <ListItem
                  onClick={() => alert('New links for NPCs is under progress')}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  <ListItemText primary="new link" />
                  <ListItemIcon>
                    <AddCircleOutlineIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Grid>
        <Grid container xs={12} sm={7} lg={3}>
          <Stack
            spacing={1}
            flex="1 1 0"
            sx={{ marginTop: '1%', marginLeft: '5%' }}
          >
            <Typography variant="h4" align="center">
              Linked Dungeons
            </Typography>
            <Box fullWidth sx={{ border: 1, height: '325px' }}>
              <List fullWidth>
                <ListItem
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                  onClick={() => alert('Linking Dungeons is under progress')}
                >
                  <ListItemText primary="new link" />
                  <ListItemIcon>
                    <AddCircleOutlineIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
            <Typography variant="h4" align="center">
              Bio
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={13}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              onBlur={(e) => {
                handleOnBlur(e, 'bio');
              }}
            />
          </Stack>
        </Grid>

        <Grid container item xs={12} sm={5} lg={4}>
          <Stack
            spacing={1}
            flex="1 1 0"
            sx={{ marginBottom: '0%', marginRight: '5%' }}
          >
            <Typography variant="h4" align="center">
              Story
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={30}
              sx={{ marginTop: '0%', marginRight: '5%' }}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              onBlur={(e) => {
                handleOnBlur(e, 'story');
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CampaignCitiesPage;
