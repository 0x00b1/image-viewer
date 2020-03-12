import List from "@material-ui/core/List";
import React from 'react';

import {useStyles} from "./CategoriesList.css";
import {CategoriesListItem} from "./CategoriesListItem";
import {NewCategoryListItem} from "./NewCategoryListItem";

type CategoriesListProps = {
  maximized: boolean;
}

export const CategoriesList = ({maximized}: CategoriesListProps) => {
  const styles = useStyles();

  return (
    <List className={styles.root} component="nav">
      <CategoriesListItem description={"Cell membrane"} maximized={maximized}/>
      <CategoriesListItem description={"Nucleus"} maximized={maximized}/>
      <NewCategoryListItem maximized={maximized}/>
    </List>
  )
};
