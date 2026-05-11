import { useState } from 'react';
import HeroSection from './HeroSection';
import PasswordForm from './PasswordForm';
import LogoIcon from './LogoIcon';
import signupBg from '@/assets/images/signupBg.png';

export default function PasswordCreatePage() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      {/* ── Mobile layout ── */}
      <div className="relative min-h-screen overflow-hidden md:hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={signupBg}
            alt=""
            aria-hidden="true"
            className={`${isSuccess ? 'h-full' : 'h-[70%]'} w-full object-cover object-[5%_center]`}
          />
          <div className="absolute inset-0 bg-black/30" />
          {!isSuccess && (
            <div className="absolute bottom-0 h-[30%] w-full bg-[#f7f9fb]" />
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col px-4 pt-12 pb-6">
          {/* Top text */}
          <div>
            <h1 className="text-left text-[42px] font-bold leading-tight tracking-[-0.02em] text-white">
              <span className="block">Welcome to</span>
              <span className="block">
                Meet <span className="text-[#a8ddd4]">Mind</span>
              </span>
            </h1>
            <p className="mt-4 text-left text-[20px] font-light leading-relaxed text-[#dbe0e7]">
              Designing intelligence that knows how to speak
            </p>
          </div>

          {/* Form section */}
          <div className="mt-auto -mb-12">
            <div className="flex flex-col items-center">
              <div className="mb-2 h-16 w-16">
                <LogoIcon className="h-full w-full" />
              </div>
              <div className="w-full">
                <PasswordForm onSuccess={() => setIsSuccess(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden min-h-screen bg-[#f7f9fb] md:flex">
        <HeroSection />
        <PasswordForm />
      </div>
    </>
  );
}
