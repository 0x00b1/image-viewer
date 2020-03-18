import React, {ChangeEvent, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {Category, slice} from "../../../store/reducer";
import {useDispatch} from "react-redux";

type EditCategoryDialogProps = {
  category: Category;
  onClose: () => void;
  open: boolean;
};

export const EditCategoryDialog = ({
  category,
  onClose,
  open
}: EditCategoryDialogProps) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>(category.description);

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onEditCategory = () => {
    const updatedCategory: Category = {
      ...category,
      description: description
    };

    dispatch(slice.actions.editCategory({
      identifier: category.identifier,
      category: updatedCategory
    }));

    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'Edit category'}</DialogTitle>
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
        <Button onClick={onEditCategory} color="primary">
          {'Edit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
