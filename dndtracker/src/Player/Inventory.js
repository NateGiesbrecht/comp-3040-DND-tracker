import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  DialogActions,
  Button,
  // Divider,
} from '@mui/material';

const Inventory = (props) => {
  const { open, handleClose, character } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title" align="center">
        {`${character.name}'s Inventory`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth rows={8} multiline label="Items" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth rows={8} multiline label="Equipment" />
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
  );
};

export default Inventory;
