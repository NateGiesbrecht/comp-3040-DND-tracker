import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import CharacterCards from './CharacterCards';
const PlayerHome = () => {
  return (
    <>
      <Typography variant="h1" align="center">
        Player Home
      </Typography>
      <Container>
        <Button component={Link} to={'/'} variant="outlined">
          Home
        </Button>

        <Button variant="outlined" sx={{ marginTop: '2%', marginBottom: '2%' }}>
          Create New Character
        </Button>
        <CharacterCards />
      </Container>
    </>
  );
};

export default PlayerHome;
