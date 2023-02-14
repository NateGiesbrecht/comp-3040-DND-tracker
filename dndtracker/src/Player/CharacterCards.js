import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  CardActions,
  Grid,
  CardMedia,
  Stack,
  CardActionArea,
} from '@mui/material';
import { deepPurple, red, deepOrange, yellow } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const image =
  'https://www.colorwallpapers.com/uploads/wallpaper/dnd-wallpapers/width-853/9wBK7PK3k59A-dnd-beautiful-hd-desktop-wallpapers.jpg';

const CharacterCards = (params) => {
  const { characters } = params;
  const pickColor = (charClass) => {
    let color;
    switch (charClass) {
      case 'Monk':
        color = deepOrange[300];
        break;
      case 'Warlock':
        color = deepPurple[300];
        break;
      case 'Cleric':
        color = yellow[300];
        break;
      case 'Barbarian':
        color = red[300];
        break;
    }
    return color;
  };
  return (
    <>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {characters.map((character, index) => (
          <Grid item xs={4} key={index}>
            <Card sx={{ minHeight: '325px', maxHeight: '325px' }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Avatar sx={{ bgcolor: pickColor(character.charClass) }}>
                  {character.name.split(' ')[0][0]}
                </Avatar>
                <Typography variant="h5" component="h2">
                  {character.name}
                </Typography>
                <Typography color="textSecondary">
                  {character.charClass}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="large" color="primary">
                  View Notes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={4}>
          <Card sx={{ minHeight: '325px', maxHeight: '325px' }}>
            <CardActionArea sx={{ minHeight: '325px' }}>
              <CardContent>
                <Stack
                  direction="column"
                  justify="center"
                  alignItems="center"
                  gap={1}
                >
                  <AddCircleOutlineIcon />
                  <Typography variant="h5">New Character</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterCards;
