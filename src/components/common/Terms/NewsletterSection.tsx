import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="bg-[#02505E] py-16 mt-16 px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-[32px] md:text-[40px] font-serif text-white mb-8">
          Never miss an update
        </h2>
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded text-[#0F172A] outline-none"
          />
          <button className="bg-[#E2E8F0] text-[#0F172A] px-6 py-3 rounded font-medium hover:bg-white transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
