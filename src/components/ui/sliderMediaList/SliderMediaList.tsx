import { ReactNode } from 'react';
import Slider from 'react-slick';
import RightArrow from '../sliderArrows/RightArrow.tsx';
import LeftArrow from '../sliderArrows/LeftArrow.tsx';

type Props = {
  children: ReactNode;
  className?: string;
};

const SliderMediaList = ({ children, className = '' }: Props) => {
  return (
    <Slider
      className={className}
      prevArrow={<LeftArrow />}
      nextArrow={<RightArrow />}
      arrows
      speed={500}
      draggable={false}
      slidesToShow={1}
      slidesToScroll={1}
      centerMode
      variableWidth
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            draggable: true,
            slidesToShow: 1,
          },
        },
      ]}
    >
      {children}
    </Slider>
  );
};

export default SliderMediaList;
