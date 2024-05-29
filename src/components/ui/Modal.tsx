import { X } from 'react-feather';
import { MouseEventHandler, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { disableScroll, enableScroll } from '../../utils/scroll.ts';

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ children, onClick }: Props) => {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);

  return createPortal(
    <>
      <div className="fixed left-[0px] top-[0px] z-50 h-screen w-full bg-gray-1400 bg-opacity-90">
        {children}
      </div>
      <button onClick={onClick} className="fixed right-[0px] top-[0px] z-50 p-1" type="button">
        <X strokeWidth={1} size={45} />
      </button>
    </>,
    document.body,
  );
};

export default Modal;
