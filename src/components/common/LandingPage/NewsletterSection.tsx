import { useState } from 'react';

export default function NewsletterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { name, email, agreed });
  };

  return (
    <section className="py-16 px-4 bg-[#F7F9FB]">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="text-left md:text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Sign Up for Our Newsletters
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Get notified of the best deals on our Meetmind post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="md:hidden w-full px-4 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#036475]/20 focus:border-[#036475] transition-all"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#036475]/20 focus:border-[#036475] transition-all"
              required
            />
            <button
              type="submit"
              className="w-full md:w-fit px-8 py-4 bg-[#024E5B] text-white font-bold rounded-xl hover:bg-[#023a44] transition-colors cursor-pointer text-sm  tracking-wider"
            >
              Subscribe
            </button>
          </div>

          <div className="flex items-start gap-3">
            <div className="relative flex items-center h-5 mt-1">
              <input
                id="newsletter-terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 text-[#036475] border-gray-300 rounded focus:ring-[#036475] cursor-pointer"
                required
              />
            </div>
            <label
              htmlFor="newsletter-terms"
              className="text-xs md:text-sm text-gray-500 leading-relaxed"
            >
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
