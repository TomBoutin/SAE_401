import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Buy, { loader as buyLoader } from './routes/buy.jsx';
import './index.css';
import ErrorPage from './ui/ErrorPage/index.jsx';
import OurTeams, { loader as OurTeamsLoader } from './routes/ourteams.jsx';
import DesignSystem, {loader as designsystemloader} from './routes/designsystem.jsx';
import Home, {loader as homeLoader} from './routes/home.jsx';
import Details, {loader as detailsLoader} from './routes/details.jsx';
import ProfilPage from './routes/profil.jsx'

// import Buy from './routes/buy.jsx';
// import { fetchPricingData } from './lib/loaders.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/details/:filmId',
        element: <Details />,
        loader: detailsLoader,
      },
      {
        path: '/profile',
        element: <ProfilPage />,
        // loader: ProfilLoader,
      }
    ],
  },
  {
    path: '/designsystem',
    element: <DesignSystem />,
    loader : designsystemloader
  },
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
