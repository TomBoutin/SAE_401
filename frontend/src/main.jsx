import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
// import About from './routes/about.jsx';
// import Buy, { loader as buyLoader } from './routes/buy.jsx';
import './index.css';
import ErrorPage from './ui/ErrorPage/index.jsx';
// import OurTeams, { loader as OurTeamsLoader } from './routes/ourteams.jsx';
import DesignSystem, {loader as designsystemloader} from './routes/designsystem.jsx';
import Home, {loader as homeLoader} from './routes/home.jsx';
import Details, {loader as detailsLoader} from './routes/details.jsx';
import ProfilPage, { loader as profilLoader} from './routes/profilpage.jsx'
import Login from './routes/login.jsx';
import { getCookie } from './lib/utils.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProfilModifierPage, { loader as profilmodifierLoader } from './routes/profilmodifierpage.jsx';

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const user = getCookie('user');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return children;
}

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = getCookie('user');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (user) {
    return null;
  }

  return children;
}


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
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: detailsLoader,
      },
      {
        path: '/profil',
        element: <PrivateRoute><ProfilPage /></PrivateRoute>,
        loader: profilLoader,
      },
      {
        path: '/profil/modifier',
        element: <PrivateRoute><ProfilModifierPage /></PrivateRoute>,
        loader: profilmodifierLoader,
      },
      {
        path: '/login',
        element: <ProtectedRoute><Login /></ProtectedRoute>,
        // loader: ProfilLoader,
      },
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
