import React, { useState } from 'react';
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

  const handleItemClick = (index) => {
    setSelectedIndex(index);
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
                    primary={city.name}
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
                // onClick={() => {
                //   handleClickNewNote();
                // }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                <ListItemText primary="Add a new note" />
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
              sx={{ marginBottom: '15%' }}
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
              Linked NPCs
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
              Dungeons Linked
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
              // value={storyNotes}
              // onChange={(e) => setStoryNotes(e.target.value)}
              // onBlur={(e) => {
              //   handleOnBlur(e, 'story');
              // }}
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
              // value={worldStory}
              // onChange={(e) => setWorldStory(e.target.value)}
              // onBlur={(e) => {
              //   handleOnBlur(e, 'world');
              // }}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CampaignCitiesPage;
