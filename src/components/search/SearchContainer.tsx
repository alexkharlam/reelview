import { Search } from 'react-feather';
import useModal from '../../hooks/useModal.ts';
import Modal from '../ui/Modal.tsx';
import SearchWindow from './SearchWindow.tsx';

const SearchContainer = () => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      <button onClick={toggleModal} className="ml-2.5" type="button">
        <Search size={28} />
      </button>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <SearchWindow onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SearchContainer;
