import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { characters } from '../Data/Characters';

export const PlayerNotes = () => {
  const [note, setNote] = useState('');
  const [index, setIndex] = useState(0);

  const handleItemClick = (content, index) => {
    setNote(content);
    setIndex(index);
  };

  const handleSave = () => {
    character.notes[index].content = note; // or do something else with the note
  };

  const params = useParams();

  const character = characters.find(
    (element) => element.id === params.playerID
  );
  return (
    <>
      <Typography variant="h1" align="center">
        {character.name}
      </Typography>
      <Container>
        <Button
          component={Link}
          to={'/'}
          variant="outlined"
          sx={{ marginRight: '2%' }}
        >
          Home
        </Button>
        <Grid container>
          <Grid item xs={4}>
            <List>
              {character.notes.map((note, index) => (
                <ListItem
                  key={note.id}
                  onClick={() => handleItemClick(note.content, index)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                >
                  <ListItemText
                    primary={character.name}
                    secondary={note.date}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              sx={{
                marginTop: '2%',
              }}
              label="Write your note"
              variant="outlined"
              multiline
              rows={10}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ marginTop: '2%' }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlayerNotes;
