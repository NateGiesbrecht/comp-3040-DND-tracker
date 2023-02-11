import React from 'react'
import { Button, Typography } from '@mui/material';
import {Link} from "react-router-dom"

const PlayerHome = () => {
  return (
    <>
    <Typography variant="h1" align="center">Player Home</Typography>
    <Button  component={Link} to={'/'} variant="outlined">Home</Button>
    </>
  )
}

export default PlayerHome
