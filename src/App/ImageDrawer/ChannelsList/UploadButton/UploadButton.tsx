import React from 'react';
import { useStyles } from './UploadButton.css';
import Button from '@material-ui/core/Button';

type UploadButtonProps = {};

export const UploadButton = (_: UploadButtonProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <input
        accept="image/*"
        className={styles.input}
        id="upload-button"
        type="file"
      />
      <label htmlFor="upload-button">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};
