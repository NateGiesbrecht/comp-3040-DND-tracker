import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayerNotes from './PlayerNotes';

const CharacterPage = (params) => {
  const { name } = params;
  return (
    <>
      <Typography variant="h1" align="center">
        Player Home
      </Typography>
      <Container>
        <Button component={Link} to={'/Player'} variant="outlined">
          Characters
        </Button>
        <PlayerNotes />
      </Container>
    </>
  );
};

export default CharacterPage;
