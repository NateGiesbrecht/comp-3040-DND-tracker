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
  ListItemIcon,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useParams } from 'react-router-dom';

import { characters } from '../Data/Characters';

function useForceUpdate() {
  const [, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
}

export const PlayerNotes = () => {
  const [note, setNote] = useState('');
  const [index, setIndex] = useState(0);

  const handleItemClick = (content, index) => {
    setNote(content);
    setIndex(index);
  };

  const handleSave = () => {
    character.notes[index].content = note;
  };

  const params = useParams();

  const character = characters.find(
    (element) => element.id === params.playerID
  );

  const getTodaysDate = () => {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  const forceUpdate = useForceUpdate();
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
                  <ListItemIcon
                    onClick={() => {
                      character.notes.splice(index, 1);
                      forceUpdate();
                    }}
                  >
                    <Delete />
                  </ListItemIcon>
                </ListItem>
              ))}
              <ListItem
                onClick={() => {
                  console.log('new note');
                  const today = getTodaysDate();
                  character.notes.push({ content: '', date: today });
                  forceUpdate();
                }}
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
