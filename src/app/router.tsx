import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import Onboarding from '@/pages/onboarding/Onboarding';
import SignupPage from '@/pages/SignupPage';
import GoogleCallback from '@/components/common/Signup/callbckPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
      { path: 'signup', element: <SignupPage /> },
      { path: '/api/v1/auth/google/callback', element: <GoogleCallback /> },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFoundPage />, // catch-all for unknown routes
  // },
]);
