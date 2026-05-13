/**
 * NewsletterSection — CTA block displayed below the Terms content.
 * Contained within a max-width wrapper with side padding, matching the design.
 * Uses serif italic font for the heading only; all other text uses Geist (sans).
 */
const NewsletterSection = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#02505E] rounded-2xl py-16 px-6 md:px-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-[28px] md:text-[36px] font-serif italic text-white mb-8">
            Never miss an update
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md font-sans">
            Subscribe to our newsletter for the latest updates on platform
            guidelines and new features.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#0F172A] outline-none font-sans text-sm"
            />
            <button className="bg-[#E2E8F0] text-[#0F172A] px-6 py-3 rounded-lg font-medium text-sm hover:bg-white transition-colors font-sans">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
