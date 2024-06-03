import { useEffect } from 'react';

const useEscKeydown = (onKeydown: () => void) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onKeydown();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onKeydown]);
};

export default useEscKeydown;
