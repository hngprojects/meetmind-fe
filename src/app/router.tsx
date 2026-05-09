import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import Onboarding from '@/pages/onboarding/Onboarding';

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
    ],
  },
]);
