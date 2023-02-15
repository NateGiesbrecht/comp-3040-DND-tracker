import React, { useState } from 'react';
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  Divider,
  Select,
  MenuItem,
} from '@mui/material';
import { deepPurple, red, deepOrange, yellow } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';

import { characters } from '../Data/Characters';
import { classes } from '../Data/Classes';

const image =
  'https://www.colorwallpapers.com/uploads/wallpaper/dnd-wallpapers/width-853/9wBK7PK3k59A-dnd-beautiful-hd-desktop-wallpapers.jpg';

const CharacterCards = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {'Create a new character'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="name" />
            </Grid>
            <Grid item xs={6}>
              <Select value="Cleric" label="class">
                {classes.map(({ className }, index) => (
                  <MenuItem key={index} value={className}>
                    {className}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth rows={8} multiline label="Traits" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
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
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  to={`/Player/${character.id}`}
                  //to={{ pathName: '/Player/', id: character.id }}
                  sx={{ marginRight: '2%' }}
                >
                  View Notes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={4}>
          <Card sx={{ minHeight: '325px', maxHeight: '325px' }}>
            <CardActionArea
              sx={{ minHeight: '325px' }}
              onClick={() => {
                handleClickOpen();
              }}
            >
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
