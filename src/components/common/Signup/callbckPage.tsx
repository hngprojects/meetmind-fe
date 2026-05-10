// src/pages/GoogleCallback.tsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      navigate('/login?error=google_auth_failed');
      return;
    }

    if (token) {
      localStorage.setItem('auth_token', token);
      navigate('/dashboard');
      return;
    }

    // no token and no error — something went wrong
    navigate('/login?error=google_auth_failed');
  }, [navigate, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-sm">Signing you in...</p>
    </div>
  );
};

export default GoogleCallback;
