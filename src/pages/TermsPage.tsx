import React from 'react';
import Navbar from '../components/common/LandingPage/Navbar';
import Footer from '../components/common/LandingPage/Footer';
import TermsContent from '../components/common/Terms/TermsContent';
import NewsletterSection from '../components/common/Terms/NewsletterSection';

export default function TermsPage() {
  return (
    <div className="bg-[#F7F9FB] min-h-screen pt-16">
      <Navbar />
      <main>
        <TermsContent />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
