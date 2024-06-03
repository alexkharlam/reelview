import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import Modal from '../ui/Modal.tsx';
import useModal from '../../hooks/useModal.ts';

const MobileNav = () => {
  const { isModalOpen, toggleModal } = useModal();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <button onClick={toggleModal} className="mr-2.5" type="button">
        <Menu size={28} />
      </button>

      {isModalOpen && (
        <Modal className="flex flex-col items-center justify-center gap-1" onClose={toggleModal}>
          <Link onClick={toggleModal} to="/">
            Home
          </Link>
          {isAuthenticated && (
            <>
              <Link onClick={toggleModal} to="/rates">
                My rates
              </Link>
              <Link onClick={toggleModal} to="/watchlist">
                My watchlist
              </Link>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default MobileNav;
