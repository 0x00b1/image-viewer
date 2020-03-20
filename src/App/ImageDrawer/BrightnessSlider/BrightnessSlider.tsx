import React from 'react';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { Channel, slice } from '../../../store/reducer';

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
    <Slider
      max={1.0}
      min={-1.0}
      onChange={onChange}
      step={0.1}
      value={channel.brightness}
    />
  );
};
