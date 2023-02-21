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

export const PlayerNotes = () => {
  const params = useParams();
  const forceUpdate = useForceUpdate();
  const [note, setNote] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  function useForceUpdate() {
    const [, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
  }

  const handleItemClick = (content, index) => {
    setNote(content);
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
      setNote(content);
    }
  };

  const handleSave = () => {
    character.notes[selectedIndex].content = note;
  };

  const character = characters.find(
    (element) => element.id === params.playerID
  );

  const handleClickNewNote = () => {
    const today = getTodaysDate();
    character.notes.push({ content: '', date: today });
    handleItemClick(
      character.notes[character.notes.length - 1].content,
      character.notes.length - 1
    );
    forceUpdate();
  };

  const handleClickDeleteNote = (index) => {
    character.notes.splice(index, 1);
    setNote('');
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    }
    forceUpdate();
  };

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
                    backgroundColor: index === selectedIndex ? '#f5f5f5' : '',
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
                      handleClickDeleteNote(index);
                    }}
                  >
                    <Delete />
                  </ListItemIcon>
                </ListItem>
              ))}
              <ListItem
                onClick={() => {
                  handleClickNewNote();
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
            {selectedIndex === -1 ? (
              <Typography sx={{ marginLeft: '2%' }} variant="p">
                {' '}
                Select a note to view...
              </Typography>
            ) : (
              <>
                <TextField
                  fullWidth
                  sx={{
                    marginTop: '2%',
                    marginLeft: '2%',
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
                  sx={{ marginTop: '2%', marginLeft: '2%' }}
                >
                  Save
                </Button>{' '}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlayerNotes;
