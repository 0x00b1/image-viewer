import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {slice} from "../../../store/reducer";
import { v4 as uuidv4 } from 'uuid';

type NewCategoryDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const NewCategoryDialog = ({
  onClose,
  open
}: NewCategoryDialogProps) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>('');

  const onCreateCategory = () => {
    const category = {
      description: description,
      identifier: uuidv4()
    };

    dispatch(slice.actions.createCategory(category));

    onClose();
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'New category'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={'Category description'}
          margin="dense"
          onChange={onDescriptionChange}
          value={description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={onCreateCategory} color="primary">
          {'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
