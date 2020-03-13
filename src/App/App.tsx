import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState} from "react";

import {useStyles} from "./App.css";
import {ApplicationAppBar} from "./ApplicationAppBar";
import {CategoriesDrawer} from "./CategoriesDrawer";
import {ImageCanvas} from "./ImageCanvas";
import {ImageDrawer} from "./ImageDrawer";

export const App = () => {
  const [maximized, setMaximized] = useState(true);

  const styles = useStyles();

  const maximize = () => setMaximized(true);
  const minimize = () => setMaximized(false);

  return (
    <div className={styles.root}>
      <CssBaseline />

      <ApplicationAppBar maximize={maximize} maximized={maximized}/>

      <CategoriesDrawer minimize={minimize} maximized={maximized}/>

      <ImageDrawer/>

      <main className={styles.content}>
        <div className={styles.toolbar} />

        <ImageCanvas/>
      </main>
    </div>
  );
};
