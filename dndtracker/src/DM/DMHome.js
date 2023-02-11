import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DMHome = () => {
  return (
    <>
      <Typography variant="h1" align="center">
        DM Home
      </Typography>

      <Button component={Link} to={'/'} variant="outlined">
        Home
      </Button>
    </>
  );
};

export default DMHome;
