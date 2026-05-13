import { useForm } from 'react-hook-form';
import api from '@/lib/api';
import messageCircleIcon from '@/assets/icons/message-circle.svg';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
}

export default function ContactPage() {
  //  MAIN CONTACT FORM HOOK
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  //  NEWSLETTER FORM HOOK
  const {
    register: registerNewsletter,
    handleSubmit: handleNewsletterSubmit,
    reset: resetNewsletter,
    formState: {
      errors: newsletterErrors,
      isSubmitting: isNewsletterSubmitting,
    },
  } = useForm<NewsletterFormData>();

  // --- SUBMIT HANDLERS ---
  const onSubmitContact = async (data: ContactFormData) => {
    try {
      const response = await api.post('/support/contact', data);
      console.log('Successfully sent:', response.data);
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('There was an error sending your message. Please try again.');
    }
  };

  const onSubmitNewsletter = async (data: NewsletterFormData) => {
    try {
      const response = await api.post('/subscriptions/email', data);
      console.log('Newsletter subscription successful:', response.data);
      toast.success('Thanks for subscribing!');
      resetNewsletter();
    } catch (error) {
      console.error('Newsletter error:', error);
      toast.error(
        'There was an error subscribing to the newsletter. Please try again.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center px-4 pt-8 md:px-8 pb-20 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
          Contact Support
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Can't find what you're looking for?
        </p>
      </div>

      {/* Form & Info Container */}
      <div className="p-6 md:p-8 mb-16 w-full max-w-3xl bg-white rounded-xl border border-gray-100 shadow-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmitContact)}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Ruth Okolo"
              className={`p-3 w-full rounded-md border focus:outline-none focus:border-teal-700 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className={`p-3 w-full rounded-md border focus:outline-none focus:border-teal-700 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className={`p-3 w-full rounded-md border focus:outline-none focus:border-teal-700 ${errors.subject ? 'border-red-500' : 'border-gray-200'}`}
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
              <span className="text-xs text-red-500 mt-1">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Describe your issue or question..."
              className={`p-3 w-full rounded-md border focus:outline-none focus:border-teal-700 ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-500 mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 w-full font-medium text-white bg-[#0A4C57] rounded-md transition-colors hover:bg-teal-900 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p className="mt-2 text-xs text-center text-gray-400">
            We typically respond within 24 hours
          </p>
        </form>

        <div className="pt-8 mt-10 md:mt-12 border-t border-gray-100">
          <h3 className="mb-4 text-sm font-bold text-gray-900">
            Other ways to reach us
          </h3>
          <div className="flex flex-col space-y-4 text-sm text-gray-600">
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              support@meetmind.ai
            </p>
            <p className="flex justify-between items-center">
              <span className="flex gap-3 items-center">
                <img
                  src={messageCircleIcon}
                  alt="Live Chat"
                  className="w-5 h-5 opacity-50"
                />
                Live Chat
              </span>
              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                Online
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center p-8 md:p-12 w-full max-w-4xl text-center bg-[#0e6e7c] rounded-2xl">
        <h2 className="mb-2 text-2xl md:text-3xl font-serif text-white">
          Never miss an update
        </h2>
        <p className="mb-8 text-sm md:text-base text-teal-100">
          Get notified when we ship new features and improvements.
        </p>

        <form
          onSubmit={handleNewsletterSubmit(onSubmitNewsletter)}
          className="flex flex-col w-full max-w-md"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 p-3 w-full bg-white text-center sm:text-left rounded-md focus:outline-none ${newsletterErrors.email ? 'border-2 border-red-400' : ''}`}
              {...registerNewsletter('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <button
              type="submit"
              disabled={isNewsletterSubmitting}
              className="px-6 py-3 w-full sm:w-auto font-medium text-gray-900 bg-gray-200 rounded-md transition-colors hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {newsletterErrors.email && (
            <span className="text-sm text-red-200 mt-2 text-center sm:text-left">
              {newsletterErrors.email.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
