import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Stack } from '@mui/material';

const CampaignNotes = (props) => {
  const { campaign } = props;
  const [storyNotes, setStoryNotes] = useState('');
  const [questLine, setQuestLine] = useState('');
  const [worldStory, setWorldStory] = useState('');

  useEffect(() => {
    setStoryNotes(campaign.storyNotes);
    setQuestLine(campaign.currentQuest);
    setWorldStory(campaign.worldStory);
  }, []);

  const handleOnBlur = (e, type) => {
    switch (type) {
      case 'story':
        campaign.storyNotes = e.target.value;
        break;
      case 'world':
        campaign.worldStory = e.target.value;
        break;
      case 'quest':
        campaign.currentQuest = e.target.value;
        break;
    }
  };
  return (
    <Grid container spacing={1}>
      <Grid container xs={12} sm={7} lg={6}>
        <Stack
          spacing={1}
          flex="1 1 0"
          sx={{ marginTop: '1%', marginLeft: '5%' }}
        >
          <Typography variant="h4" align="center">
            Current Quest Line
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={13}
            value={questLine}
            onChange={(e) => setQuestLine(e.target.value)}
            onBlur={(e) => {
              handleOnBlur(e, 'quest');
            }}
          />
          <Typography variant="h4" align="center">
            Important Story Notes
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={13}
            value={storyNotes}
            onChange={(e) => setStoryNotes(e.target.value)}
            onBlur={(e) => {
              handleOnBlur(e, 'story');
            }}
          />
        </Stack>
      </Grid>

      <Grid container item xs={12} sm={5} lg={6}>
        <Stack
          spacing={1}
          flex="1 1 0"
          sx={{ marginBottom: '0%', marginRight: '5%' }}
        >
          <Typography variant="h4" align="center">
            World Story
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={30}
            sx={{ marginTop: '0%', marginRight: '5%' }}
            value={worldStory}
            onChange={(e) => setWorldStory(e.target.value)}
            onBlur={(e) => {
              handleOnBlur(e, 'world');
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CampaignNotes;
