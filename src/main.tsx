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

// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//         <Route index={true} path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/test" element={<TestPage />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/reviews/:id" element={<Review />} />

//         <Route path="" element={<PrivateRoute />}>
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/reviews/create" element={<CreateReview />} />
//           <Route path="/profile/reviews" element={<MyReviews />} />
//           <Route path="/profile/favourites" element={<FavouriteReviews />} />
//         </Route>
//       </Route>,
//     ),
//   );

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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
