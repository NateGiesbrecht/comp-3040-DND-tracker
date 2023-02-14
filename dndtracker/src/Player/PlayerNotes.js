import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export const PlayerNotes = () => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    console.log(note); // or do something else with the note
  };
  return (
    <>
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
      <Button variant="contained" onClick={handleSave} sx={{ marginTop: '2%' }}>
        Save
      </Button>
    </>
  );
};

export default PlayerNotes;
