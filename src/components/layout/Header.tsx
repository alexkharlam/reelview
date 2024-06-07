import { useIsFetching } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAuth0 } from '@auth0/auth0-react';
import reelrateLogo from '../../assets/reelrate-logo.svg';
import ProfilePhoto from '../ui/ProfilePhoto.tsx';
import defaultProfilePhoto from '../../assets/default-profile.png';
import SmallLoader from '../ui/SmallLoader/index.tsx';
import MobileNav from './MobileNav.tsx';
import SearchContainer from '../search/SearchContainer.tsx';
import LoaderHorizontal from '../ui/LoaderHorizontal/index.tsx';

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
  const isFetching = useIsFetching();

  const btnClass = classNames('text-md font-medium');

  return (
    <header className="flex items-center border-b-2 border-gray-800 px-2 py-1.5">
      <MobileNav />

      <Link className="mr-auto" to="/">
        <img width={100} src={reelrateLogo} alt="Reelrate logo" />
      </Link>
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
      <SearchContainer />
      {isFetching === 1 && (
        <LoaderHorizontal className="absolute left-[0px] top-[0px] h-1 w-full" />
      )}
    </header>
  );
};

export default Header;
