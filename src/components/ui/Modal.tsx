import classNames from 'classnames';
import { X } from 'react-feather';
import { MouseEventHandler, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { disableScroll, enableScroll } from '../../utils/scroll.ts';
import useEscKeydown from '../../hooks/useEscKeydown.ts';

type Props = {
  children: ReactNode;
  onClose: () => void | MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Modal = ({ children, onClose, className = '' }: Props) => {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);

  useEscKeydown(onClose);

  const modalClass = classNames(
    className,
    'fixed left-[0px] top-[0px] z-50 h-screen w-full bg-gray-1400 bg-opacity-90',
  );

  return createPortal(
    <>
      <div className={modalClass}>{children}</div>
      <button onClick={onClose} className="fixed right-[0px] top-[0px] z-50 p-1" type="button">
        <X strokeWidth={1} size={45} />
      </button>
    </>,
    document.body,
  );
};

export default Modal;
