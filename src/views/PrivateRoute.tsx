import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = false; // For testing react-router. Add real auth later

  if (isAuthenticated) return <Outlet />;

  return <div>This is a private route, you need to register</div>;
};

export default PrivateRoute;
