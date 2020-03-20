import React from 'react';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { Channel, slice } from '../../../../store/reducer';
import Typography from '@material-ui/core/Typography';

type BrightnessSliderProps = {
  channel: Channel;
};

export const BrightnessSlider = ({ channel }: BrightnessSliderProps) => {
  const dispatch = useDispatch();

  const onChange = (
    _: React.ChangeEvent<{}>,
    brightness: number | number[]
  ): void => {
    const edited: Channel = {
      ...channel,
      brightness: brightness as number
    };

    dispatch(slice.actions.editChannel(edited));
  };

  return (
    <>
      <Typography gutterBottom>{'Brightness'}</Typography>

      <Slider
        max={1.0}
        min={-1.0}
        onChange={onChange}
        step={0.1}
        value={channel.brightness}
      />
    </>
  );
};
