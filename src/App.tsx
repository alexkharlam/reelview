import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
