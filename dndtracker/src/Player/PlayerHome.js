import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayerNotes from './PlayerNotes';

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
        <PlayerNotes />
      </Container>
    </>
  );
};

export default PlayerHome;
