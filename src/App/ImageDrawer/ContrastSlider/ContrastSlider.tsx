import React from 'react';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { Channel, slice } from '../../../store/reducer';

type ContrastSliderProps = {
  channel: Channel;
};

export const ContrastSlider = ({ channel }: ContrastSliderProps) => {
  const dispatch = useDispatch();

  const onChange = (
    _: React.ChangeEvent<{}>,
    contrast: number | number[]
  ): void => {
    const edited: Channel = {
      ...channel,
      contrast: contrast as number
    };

    dispatch(slice.actions.editChannel(edited));
  };

  return (
    <Slider
      max={1.0}
      min={-1.0}
      onChange={onChange}
      step={0.1}
      value={channel.contrast}
    />
  );
};
