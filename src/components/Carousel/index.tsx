import * as React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

type Props = {
  width?: number;
  height?: number;
  autoplay?: boolean;
  data: any[];
  animationduration?: number;
  children?: React.ReactNode;
  renderItems?: any;
};

const CarouselComponent: React.FC<Props> = ({
  width,
  height,
  autoplay = false,
  data,
  animationduration,
  renderItems,
}) => {
  width = Dimensions.get('window').width;

  return (
    <Carousel
      loop
      width={width}
      height={height}
      autoPlay={autoplay}
      data={data}
      scrollAnimationDuration={animationduration}
      renderItem={renderItems}
    />
  );
};

export default CarouselComponent;
