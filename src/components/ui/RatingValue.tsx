import classNames from 'classnames';

type Props = {
  value: number;
  className?: string;
};

const RatingValue = ({ value, className = '' }: Props) => {
  const textClass = classNames('font-bold', {
    'text-red-700': value < 3 && value >= 0,
    'text-orange-500': value < 5 && value >= 3,
    'text-yellow-500': value < 7 && value >= 5,
    'text-green-500': value < 8 && value >= 7,
    'text-green-800': value >= 8,
    className,
  });

  return <div className={textClass}>{value}</div>;
};

export default RatingValue;
