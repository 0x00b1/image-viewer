import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar
  }),
);
