/* eslint-disable no-unused-vars */
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
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useParams } from 'react-router-dom';
import Inventory from './Inventory';
import { characters } from '../Data/Characters';
import ClearIcon from '@mui/icons-material/Clear';

export const PlayerNotes = () => {
  const params = useParams();
  const forceUpdate = useForceUpdate();
  const [note, setNote] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [openInventory, setOpenInventory] = useState(false);
  const [search, setSearch] = useState('');
  const [matchedIndexes, setMatchedIndexes] = useState([]);

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

  const handleCloseInventory = () => {
    setOpenInventory(false);
  };

  const handleOpenInventory = () => {
    setOpenInventory(true);
  };

  const handleSearch = () => {
    console.log('Searching for: ', search);
    console.log('inside : ', character.notes);
    const matches = [];
    for (let i = 0; i < character.notes.length; i++) {
      console.log(character.notes[i].content);
      console.log(
        character.notes[i].content.toLowerCase().includes(search.toLowerCase())
      );
      if (
        character.notes[i].content.toLowerCase().includes(search.toLowerCase())
      ) {
        console.log('here');
        matches.push(i);
      }
    }
    console.log('matches', matches);
    setMatchedIndexes([...matches]);
  };

  const selectColor = (index) => {
    if (matchedIndexes.includes(index)) {
      return '#FEFF9D';
    } else {
      return index === selectedIndex ? '#f5f5f5' : '';
    }
  };

  const handleClearClick = () => {
    setSearch('');
    setMatchedIndexes([]);
  };
  return (
    <>
      <Inventory
        open={openInventory}
        handleClose={handleCloseInventory}
        character={character}
      />
      <Typography variant="h1" align="center">
        {character.name}
      </Typography>

      <Container>
        {/* <TextField
          fullWidth
          label="Search"
          sx={{ marginBottom: '1%' }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <>
                <Button onClick={handleSearch}>Search</Button>
                <IconButton
                  sx={{ visibility: 'visible' }}
                  onClick={handleClearClick}
                >
                  <ClearIcon />
                </IconButton>
              </>
            ),
          }}
        /> */}

        <Button
          component={Link}
          to={'/'}
          variant="outlined"
          sx={{ marginRight: '2%' }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            handleOpenInventory();
          }}
          variant="outlined"
          sx={{ marginRight: '2%' }}
        >
          Inventory
        </Button>
        <Grid container>
          <Grid item xs={4}>
            <Container
              style={{ maxHeight: '485px', overflow: 'auto' }}
              disableGutters
            >
              <List>
                {character.notes.map((note, index) => (
                  <ListItem
                    key={note.id}
                    onClick={() => handleItemClick(note.content, index)}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: selectColor(index),
                      //backgroundColor: index === selectedIndex ? '#f5f5f5' : '',
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
            </Container>
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
                  rows={19}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  onBlur={() => {
                    handleSave();
                  }}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlayerNotes;
