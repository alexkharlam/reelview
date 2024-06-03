import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="px-1">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
