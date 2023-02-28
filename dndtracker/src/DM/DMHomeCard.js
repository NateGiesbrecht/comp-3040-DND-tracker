import React from 'react';
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const DMHomeCard = (params) => {
  const { title, body, image, campaignID } = params;
  return (
    <Paper>
      <Card sx={{ marginTop: '2%', width: '100%' }}>
        <CardActionArea component={Link} to={`/DM/${campaignID}`}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};
