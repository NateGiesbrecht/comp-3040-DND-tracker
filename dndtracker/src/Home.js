import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import {Link} from "react-router-dom"

 const Home = () => {
  return (
    <>
    <Typography variant="h1" align="center">HOME</Typography>
                <Typography variant="h6" align="center">What type of player are you?</Typography>
        <Grid container spacing={0} style={{ minHeight: '75vh' }}
            direction="row"
            alignItems="center"
            justifyContent="center"> 
            <Grid item xs={2}/>
            <Grid item xs={3}>
                <Button  component={Link} to={'/DM'} fullWidth variant="outlined" sx={{minHeight: "200px"}}>Dungeon Master</Button>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={3}>
                <Button component={Link} to={'/Player'} fullWidth variant="outlined" sx={{minHeight: "200px"}}>Player</Button>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    </>
  )
}

export default Home;
