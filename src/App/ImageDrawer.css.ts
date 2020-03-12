import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    paper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
  }),
);
