import { Outlet } from 'react-router-dom';

/**
 * Root layout — wraps all pages.
 * Add global navigation, toaster, etc. here.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
