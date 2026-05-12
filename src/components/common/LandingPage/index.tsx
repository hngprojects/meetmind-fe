import CTASection from './CTASection';
import DashboardPreview from './DashboardPreview';
import FeaturesGrid from './FeaturesGrid';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import TemperatureControl from './TemperatureControl';
import Testimonials from './Testimonials';

export default function LandingPage() {
  return (
    <div className="bg-[#F7F9FB] pt-16">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <HowItWorks />
      <FeaturesGrid />
      <TemperatureControl />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
