import List from '@material-ui/core/List';
import React from 'react';
import {useSelector} from "react-redux";

import { useStyles } from './CategoriesList.css';
import { CategoriesListItem } from '../CategoriesListItem';
import { NewCategoryListItem } from '../NewCategoryListItem';
import {Category, State} from "../../../store/reducer";

type CategoriesListProps = {
  maximized: boolean;
};

export const CategoriesList = ({ maximized }: CategoriesListProps) => {
  const categories = useSelector((state: State) => {
    return state.categories;
  });

  const styles = useStyles();

  return (
    <List className={styles.root} component="nav">
      {
        categories.map((category: Category) => {
          return <CategoriesListItem category={category} key={category.identifier} maximized={maximized} />;
        })
      }
      <NewCategoryListItem maximized={maximized} />
    </List>
  );
};
