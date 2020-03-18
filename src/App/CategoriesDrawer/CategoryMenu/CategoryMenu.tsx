import React from 'react';
import Menu from '@material-ui/core/Menu';
import { EditCategoryMenuItem } from '../EditCategoryMenuItem';
import { DeleteCategoryMenuItem } from '../DeleteCategoryMenuItem';
import {Category} from "../../../store/reducer";

type CategoryMenuProps = {
  anchorEl: null | HTMLElement;
  category: Category;
  onClose: () => void;
  open: boolean;
};

export const CategoryMenu = ({
  anchorEl,
  category,
  onClose,
  open
}: CategoryMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted onClose={onClose} open={open}>
      <EditCategoryMenuItem category={category} onMenuClose={onClose} />
      <DeleteCategoryMenuItem category={category} onMenuClose={onClose} />
    </Menu>
  );
};
