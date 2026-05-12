export default function ContactPage() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 pb-20 bg-gray-50 min-h-screen">
      {/* 1. Header Section */}
      <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
          Contact Support
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Can't find what you're looking for?
        </p>
      </div>

      {/* 2. Form & Info Container */}
      <div className="p-6 md:p-8 mb-16 w-full max-w-3xl bg-white rounded-xl border border-gray-100 shadow-sm">
        {/* Form Fields */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Ruth Okolo"
              className="p-3 w-full rounded-md border border-gray-200 focus:outline-none focus:border-teal-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="p-3 w-full rounded-md border border-gray-200 focus:outline-none focus:border-teal-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="p-3 w-full rounded-md border border-gray-200 focus:outline-none focus:border-teal-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Describe your issue or question..."
              className="p-3 w-full rounded-md border border-gray-200 focus:outline-none focus:border-teal-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 w-full font-medium text-white bg-[#0A4C57] rounded-md transition-colors hover:bg-teal-900"
          >
            Send Message
          </button>
          <p className="mt-2 text-xs text-center text-gray-400">
            We typically respond within 24 hours
          </p>
        </form>

        {/* Other ways to reach us */}
        <div className="pt-8 mt-10 md:mt-12 border-t border-gray-100">
          <h3 className="mb-4 text-sm font-bold text-gray-900">
            Other ways to reach us
          </h3>
          <div className="flex flex-col space-y-4 text-sm text-gray-600">
            <p className="flex gap-3 items-center">
              <span className="text-gray-400">✉️</span> support@meetmind.ai
            </p>
            <p className="flex justify-between items-center">
              <span className="flex gap-3 items-center">
                <span className="text-gray-400">💬</span> Live Chat
              </span>
              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                Online
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Newsletter Section */}
      <div className="flex flex-col items-center p-8 md:p-12 w-full max-w-4xl text-center bg-[#0A4C57] rounded-2xl">
        <h2 className="mb-2 text-2xl md:text-3xl font-serif text-white">
          Never miss an update
        </h2>
        <p className="mb-8 text-sm md:text-base text-teal-100">
          Get notified when we ship new features and improvements.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 w-full text-center bg-white rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="px-6 py-3 w-full sm:w-auto font-medium text-gray-900 bg-gray-200 rounded-md transition-colors hover:bg-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
