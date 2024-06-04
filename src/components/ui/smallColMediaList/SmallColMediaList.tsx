import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SmallColMediaList = ({ children }: Props) => {
  return <ul className="mt-2 flex flex-col">{children}</ul>;
};

export default SmallColMediaList;
