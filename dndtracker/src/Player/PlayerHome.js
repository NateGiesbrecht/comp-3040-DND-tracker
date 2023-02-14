import React from 'react';
import { Button, Typography, Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import PlayerNotes from './PlayerNotes';
import CharacterCards from './CharacterCards';
import { Link } from 'react-router-dom';

const characters = [
  { name: 'Fritz', charClass: 'Monk' },
  { name: 'Squash', charClass: 'Barbarian' },
  { name: 'Alyia', charClass: 'Cleric' },
  { name: 'Carcis', charClass: 'Warlock' },
];

const PlayerHome = () => {
  return (
    <>
      <Typography variant="h1" align="center">
        Characters
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
        <Button variant="outlined" sx={{ marginTop: '2%', marginBottom: '2%' }}>
          Create New Character
        </Button>
        <CharacterCards characters={characters} />
      </Container>
    </>
  );
};

export default PlayerHome;
