import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/components/common/LandingPage/Navbar';
import Footer from '@/components/common/LandingPage/Footer';
import { Toaster } from 'react-hot-toast';

/**
 * Root layout - wraps all pages.
 * Global navigation and footer added.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <ScrollRestoration />
      {/* Global Navbar at the top */}
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      {/* page content(e.g HomePage, ContactPage, etc.) */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Global Footer at the bottom */}
      <Footer />
    </div>
  );
}
