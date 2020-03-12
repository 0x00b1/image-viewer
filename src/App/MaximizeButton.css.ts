import {createStyles, makeStyles} from "@material-ui/core/styles";

const style = () =>
  createStyles({
    hide: {
      display: 'none'
    },
    iconButton: {
      marginRight: 36
    }
  });

export const useStyles = makeStyles(style);
