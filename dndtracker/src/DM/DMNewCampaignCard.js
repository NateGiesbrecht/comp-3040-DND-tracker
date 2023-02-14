import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const DMNewCampaignCard = () => {
  return (
    <Paper>
      <Card sx={{ marginTop: '2%', width: '100%' }}>
        <CardActionArea>
          <CardContent>
            <Stack direction="row" alignItems="center" gap={1}>
              <AddCircleOutlineIcon />
              <Typography variant="body1">New Campaign</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};
