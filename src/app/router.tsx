import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { PasswordCreatePage } from '../pages/PasswordCreatePage';
import SignupPage from '@/pages/SignupPage';
import GoogleCallback from '@/components/common/Signup/callbckPage';

// FIXED IMPORT: No need for /Index.tsx
import ContactPage from '@/components/common/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';

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
        path: 'reset-password',
        element: <PasswordCreatePage />,
      },
      { path: 'signup', element: <SignupPage /> },
      { path: '/api/v1/auth/google/callback', element: <GoogleCallback /> },

      // Your new route!
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFoundPage />, // catch-all for unknown routes
  // },
]);
