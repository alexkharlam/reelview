import classNames from 'classnames';
import { ArrowRight } from 'react-feather';
import { CustomArrowProps } from 'react-slick';

const RightArrow = ({ onClick }: CustomArrowProps) => {
  const btnClass = classNames(
    'absolute hover:scale-105 transition-all duration-100 right-1 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black rounded-full text-white',
  );

  return (
    <button className={btnClass} onClick={onClick} type="button">
      <ArrowRight size={28} strokeWidth={2.5} />
    </button>
  );
};

export default RightArrow;
