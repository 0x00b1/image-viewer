import React from 'react';
import Slider from '@material-ui/core/Slider';

type BrightnessSliderProps = {
  brightness: number;
  setBrightness: (brightness: number) => void;
};

export const BrightnessSlider = ({
  brightness,
  setBrightness
}: BrightnessSliderProps) => {
  const onChange = (
    _: React.ChangeEvent<{}>,
    brightness: number | number[]
  ): void => {
    setBrightness(brightness as number);
  };

  return (
    <Slider
      max={1.0}
      min={-1.0}
      onChange={onChange}
      step={0.1}
      value={brightness}
    />
  );
};
