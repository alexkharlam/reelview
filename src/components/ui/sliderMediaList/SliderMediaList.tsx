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
      infinite
      speed={500}
      draggable={false}
      slidesToShow={7}
      slidesToScroll={1}
      centerMode
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            draggable: true,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {children}
    </Slider>
  );
};

export default SliderMediaList;
