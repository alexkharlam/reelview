import classNames from 'classnames';
import './styles.css';

type Props = {
  className?: string;
};

const LoaderHorizontal = ({ className = '' }: Props) => {
  const loaderClass = classNames('horizontal-loader', className);

  return <div className={loaderClass}>LoaderHorizontal</div>;
};

export default LoaderHorizontal;
