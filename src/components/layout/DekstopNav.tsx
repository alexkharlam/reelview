import { useAuth0 } from '@auth0/auth0-react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const DekstopNav = () => {
  const { isAuthenticated } = useAuth0();

  const linkClass = classNames('hover:underline text-lg');

  return (
    <nav className="mr-auto flex gap-2">
      <Link className={linkClass} to="/">
        Home
      </Link>
      {isAuthenticated && (
        <>
          <Link className={linkClass} to="/rates">
            Rates
          </Link>
          <Link className={linkClass} to="/watchlist">
            Watchlist
          </Link>
        </>
      )}
    </nav>
  );
};

export default DekstopNav;
