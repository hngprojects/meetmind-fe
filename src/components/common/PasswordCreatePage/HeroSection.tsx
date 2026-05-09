import LogoIcon from './LogoIcon';

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[34vh] items-start overflow-hidden px-6 py-12 md:min-h-screen md:flex-1 md:items-center md:justify-center md:px-10 md:py-10">
      <img
        src={backgroundImageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-top"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-[420px] text-left">
        <div className="max-w-[340px] md:max-w-[420px]">
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-white md:text-[56px] md:leading-[1.1]">
            <span className="block">Welcome to</span>
            <span className="block">
              Meet <span className="text-[#a8ddd4]">Mind</span>
            </span>
          </h1>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-[#dbe0e7] md:mt-6 md:text-[24px] md:leading-[1.4]">
            Designing intelligence that knows how to speak
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-32px] left-1/2 z-20 h-16 w-16 -translate-x-1/2 md:hidden">
        <LogoIcon className="h-full w-full" />
      </div>
    </section>
  );
}
