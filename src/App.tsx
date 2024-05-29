import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  );
};

export default App;
