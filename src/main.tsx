import { Auth0Provider } from '@auth0/auth0-react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Error from './views/Error.tsx';
import Home from './views/Home.tsx';
import Details from './views/Details.tsx';
import PrivateRoute from './views/PrivateRoute.tsx';
import Rates from './views/Rates.tsx';
import WatchList from './views/WatchList.tsx';
import getAuthConfig from './helpers/getAuthConfig.ts';

const { auth0Domain, auth0ClientId, auth0RedirectUri } = getAuthConfig();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index path="/" element={<Home />} />
      <Route index path="/movie/:idSlug" element={<Details />} />
      <Route index path="/tv/:idSlug" element={<Details />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/rates" element={<Rates />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri: auth0RedirectUri,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
);
