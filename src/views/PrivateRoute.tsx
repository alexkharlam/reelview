import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) return <p>loading</p>;

  if (isAuthenticated) return <Outlet />;

  loginWithRedirect();

  return <p>Redirecting to login page...</p>;
};

export default PrivateRoute;
