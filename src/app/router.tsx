import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import ForgotPasswordPage from '@/pages/Forgot-Password';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import { PasswordCreatePage } from '../pages/PasswordCreatePage';
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
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: 'create-password',
        element: <PasswordCreatePage />,
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
