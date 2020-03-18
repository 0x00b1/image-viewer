import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React from 'react';

type NewChannelDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const NewChannelDialog = ({
                                    onClose,
                                    open
                                  }: NewChannelDialogProps) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'New channel'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={'Channel description'}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={onClose} color="primary">
          {'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
