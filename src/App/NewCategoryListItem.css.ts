import {createStyles, makeStyles} from "@material-ui/core/styles";

const style = () =>
  createStyles({
    hide: {
      display: 'none'
    }
  });

export const useStyles = makeStyles(style);
