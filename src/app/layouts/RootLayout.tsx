import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/components/common/ScrollToTop';

/**
 * Root layout — wraps all pages.
 * Add global navigation, toaster, etc. here.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
