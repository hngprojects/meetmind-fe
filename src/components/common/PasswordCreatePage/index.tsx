import HeroSection from './HeroSection';
import PasswordForm from './PasswordForm';

export default function PasswordCreatePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] md:flex">
      <HeroSection />
      <PasswordForm />
    </div>
  );
}
