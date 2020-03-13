/// <reference types="react-vis-types" />

import * as React from 'react';
import { AreaSeries, XYPlot } from 'react-vis';
import { Image } from 'image-js';

type ImageHistogramProps = {
  bins: number;
  image: Image;
};

export const ImageHistogram = (props: ImageHistogramProps) => {
  const { bins, image } = props;

  const histograms = image.getHistograms({ maxSlots: bins });

  const transform = (xs: number[]): { x: number; y: number }[] => {
    return xs.map((element, index) => {
      return { x: index, y: element };
    });
  };

  return (
    <XYPlot height={300} width={300}>
      <AreaSeries
        color="#e53935"
        data={transform(histograms[0])}
        opacity={0.5}
      />
      <AreaSeries
        color="#43a047"
        data={transform(histograms[1])}
        opacity={0.5}
      />
      <AreaSeries
        color="#1e88e5"
        data={transform(histograms[2])}
        opacity={0.5}
      />
    </XYPlot>
  );
};
