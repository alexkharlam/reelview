import classNames from 'classnames';
import { useAuth0 } from '@auth0/auth0-react';
import { Search } from 'react-feather';
import reelrateLogo from '../../assets/reelrate-logo.svg';
import ProfilePhoto from '../ui/ProfilePhoto.tsx';
import defaultProfilePhoto from '../../assets/default-profile.png';
import SmallLoader from '../ui/SmallLoader/index.tsx';
import MobileNav from './MobileNav.tsx';

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();

  const btnClass = classNames('text-md font-medium');
  const iconSize = 28;

  return (
    <header className="flex items-center border-b-2 border-gray-800 px-2 py-1.5">
      <MobileNav />

      <img className="mr-auto" width={100} src={reelrateLogo} alt="Reelrate logo" />
      {!isAuthenticated && !isLoading && (
        <button className={btnClass} type="button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}
      {isLoading && <SmallLoader />}
      {isAuthenticated && !isLoading && (
        <div className="flex items-center gap-1.5">
          <ProfilePhoto alt="Profile" src={user?.picture || defaultProfilePhoto} />
          <button className={btnClass} type="button" onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
      <button className="ml-2.5" type="button">
        <Search size={iconSize} />
      </button>
    </header>
  );
};

export default Header;
