import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  DialogActions,
  Button,
  Typography,
  // Divider,
} from '@mui/material';

const Inventory = (props) => {
  const { open, handleClose, character } = props;
  const [items, setItems] = useState('');
  const [equipment, setEquipment] = useState('');

  useEffect(() => {
    setItems(character.items);
    setEquipment(character.equipment);
  }, []);

  const handleOnBlur = (e, type) => {
    switch (type) {
      case 'items':
        character.items = e.target.value;
        break;
      case 'equipment':
        character.equipment = e.target.value;
        break;
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle id="alert-dialog-title" align="center">
        {`${character.name}'s Inventory`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              Items
            </Typography>
            <TextField
              fullWidth
              rows={30}
              multiline
              value={items}
              onChange={(e) => setItems(e.target.value)}
              onBlur={(e) => {
                handleOnBlur(e, 'items');
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              Equipment
            </Typography>
            <TextField
              fullWidth
              rows={30}
              multiline
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              onBlur={(e) => {
                handleOnBlur(e, 'equipment');
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Inventory;
