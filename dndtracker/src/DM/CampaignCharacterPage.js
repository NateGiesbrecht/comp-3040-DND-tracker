import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  Stack,
  TextField,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Avatar,
  Box,
  Divider,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CampaignCharacterPage = (props) => {
  const { campaign, componentToDisplay, indexToUse } = props;
  const [selectedIndex, setSelectedIndex] = useState(indexToUse ?? 0);
  const [bio, setBio] = useState('');
  const [story, setStory] = useState('');

  const handleItemClick = (index) => {
    //setNote(content);
    if (selectedIndex === index) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    setStory(campaign.characters[selectedIndex].story);
    setBio(campaign.characters[selectedIndex].bio);
  }, [selectedIndex]);

  const handleOnBlur = (e, type) => {
    switch (type) {
      case 'bio':
        campaign.characters[selectedIndex].bio = e.target.value;
        break;
      case 'story':
        campaign.characters[selectedIndex].story = e.target.value;
        break;
    }
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={12} lg={2}>
          <Grid item xs={12} sx={{ px: 2 }}>
            <label>NPCs</label>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <List fullWidth>
              {campaign.characters.map((npc, index) => (
                <ListItem
                  key={npc.id}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: index === selectedIndex ? '#f5f5f5' : '',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  <ListItemText
                    primary={npc.name}
                    //primary={character.name}
                  />
                  <ListItemIcon
                  // onClick={() => {
                  //   handleClickDeleteNote(index);
                  // }}
                  >
                    <Delete />
                  </ListItemIcon>
                </ListItem>
              ))}
              <ListItem
                onClick={() => {
                  alert(
                    'Under development. New NPC functionality not currently available.'
                  );
                }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <ListItemText primary="new NPC" />
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={7} lg={3}>
          <Stack
            spacing={1}
            flex="1 1 0"
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
                  src={campaign.characters[selectedIndex].avatar}
                  sx={{
                    width: 250,
                    height: 250,
                    marginTop: '15%',
                  }}
                />
                <Typography align="center" variant="h5">
                  {campaign.characters[selectedIndex].name}
                </Typography>
              </Stack>
            </Box>

            <Typography variant="h4" align="center">
              Linked NPCs
            </Typography>
            <Box fullWidth sx={{ border: 1, height: '325px' }}>
              <List fullWidth>
                {campaign.characters[selectedIndex].linkedCharacters.map(
                  (linkedNpc, index) => (
                    <ListItem
                      key={linkedNpc}
                      onClick={() => handleItemClick(linkedNpc)}
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
                      // onClick={() => {
                      //   handleClickDeleteNote(index);
                      // }}
                      >
                        <Delete />
                      </ListItemIcon>
                    </ListItem>
                  )
                )}
                <ListItem
                  onClick={() => alert('New Links for NPCS is under progress')}
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
            sx={{ marginTop: '2%', marginLeft: '5%' }}
          >
            <Typography variant="h4" align="center">
              Dungeons & Cities
            </Typography>
            <Box fullWidth sx={{ border: 1, height: '325px' }}>
              <List fullWidth>
                {campaign.characters[selectedIndex].linkedCities.map(
                  (linkedCity, index) => (
                    <ListItem
                      key={linkedCity}
                      onClick={() => {
                        componentToDisplay('cities', linkedCity);
                      }}
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
                        primary={campaign.cities[linkedCity].name}
                      />
                      <ListItemIcon>
                        <Delete />
                      </ListItemIcon>
                    </ListItem>
                  )
                )}
                <ListItem
                  onClick={() =>
                    alert('New Links for cities/dungeons is under progress')
                  }
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

        <Grid container item xs={12} sm={7} lg={3}>
          <Stack spacing={1} flex="1 1 0" sx={{ marginBottom: '0%' }}>
            <Typography variant="h4" align="center">
              Story
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={30}
              sx={{ marginTop: '0%' }}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              onBlur={(e) => {
                handleOnBlur(e, 'world');
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CampaignCharacterPage;
