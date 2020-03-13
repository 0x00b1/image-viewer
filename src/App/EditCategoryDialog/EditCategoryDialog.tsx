import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

type EditCategoryDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const EditCategoryDialog = ({
  onClose,
  open
}: EditCategoryDialogProps) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'Edit category'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={'Category description'}
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
