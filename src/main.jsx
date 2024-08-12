import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import HomePage from './pages/HomePage';
import MainLayout from './components/layout/MainLayout';

import MovieCountryPage from './pages/MovieCountryPage';
import DetailMovie from './pages/DetailMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/movie/:slug',
        element: <DetailMovie></DetailMovie>,
      },
      {
        path: '/list/:slug',
        element: <MovieCountryPage></MovieCountryPage>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
