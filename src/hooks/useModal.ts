import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((oldState) => !oldState);

  return { isModalOpen, toggleModal };
};

export default useModal;
