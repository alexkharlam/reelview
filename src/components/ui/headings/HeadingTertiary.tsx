import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const HeadingTertiary = ({ children, className = '' }: Props) => {
  const h2class = classNames('text-white text-1xl font-semibold mb-2', className);

  return <h3 className={h2class}>{children}</h3>;
};

export default HeadingTertiary;
