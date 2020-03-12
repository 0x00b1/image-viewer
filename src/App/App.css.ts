import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const style = ({mixins, spacing}: Theme) => {
  const styles = {
    content: {
      flexGrow: 1,
      padding: spacing(3)
    },
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: spacing(0, 1),
      ...mixins.toolbar,
    }
  };

  return createStyles(styles);
};

export const useStyles = makeStyles(style);
