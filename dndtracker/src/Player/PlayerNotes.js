import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { characters } from '../Data/Characters';

export const PlayerNotes = () => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    console.log(note); // or do something else with the note
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
        <TextField
          fullWidth
          sx={{ marginTop: '2%' }}
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
      </Container>
    </>
  );
};

export default PlayerNotes;
