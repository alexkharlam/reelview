import classNames from 'classnames';
import './smallLoader.css';

type Props = {
  className?: string;
};

const SmallLoader = ({ className = '' }: Props) => {
  const loaderClass = classNames('small-loader h-2 w-2', className);

  return <div className={loaderClass} />;
};

export default SmallLoader;
