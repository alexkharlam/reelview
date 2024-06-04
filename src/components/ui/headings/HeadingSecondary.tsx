import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const HeadingSecondary = ({ children, className = '' }: Props) => {
  const h2class = classNames('text-primary text-2xl font-semibold mb-2.5', className);

  return <h2 className={h2class}>{children}</h2>;
};

export default HeadingSecondary;
