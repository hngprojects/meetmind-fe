import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Structured data array for all Terms of Service sections.
 * Each entry maps to a sidebar navigation item and a content block.
 */
const termsData = [
  {
    id: 'welcome',
    label: 'Welcome to MeetMind',
    title: 'Welcome to MeetMind.',
    content: (
      <p>
        By using MeetMind (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
        you agree to these Terms of Service. Please read them carefully before
        using our platform. If you do not agree, do not use our services.
      </p>
    ),
  },
  {
    id: '01',
    label: '01. Definitions',
    title: '01. Definitions',
    content: (
      <div className="space-y-3">
        <p>
          <strong>&quot;Service&quot;</strong> refers to the MeetMind
          application and website.
        </p>
        <p>
          <strong>&quot;User&quot;</strong> means anyone who accesses or uses
          the Service.
        </p>
        <p>
          <strong>&quot;Content&quot;</strong> refers to text, audio, meeting
          transcripts, and other materials generated or processed by the
          Service.
        </p>
      </div>
    ),
  },
  {
    id: '02',
    label: '02. Eligibility',
    title: '02. Eligibility',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>You must be at least 18 years old to use the Service.</li>
        <li>
          You must provide accurate and complete information during
          registration.
        </li>
        <li>
          You are responsible for maintaining the security of your account.
        </li>
      </ul>
    ),
  },
  {
    id: '03',
    label: '03. Account Registration',
    title: '03. Account Registration',
    content: (
      <p>
        You must register for an account to access most features of our
        platform. Keep your credentials secure.
      </p>
    ),
  },
  {
    id: '04',
    label: '04. User Data and Privacy',
    title: '04. User Data and Privacy',
    content: (
      <p>
        We respect your privacy. Our use of your data is governed by our Privacy
        Policy, which is incorporated into these terms.
      </p>
    ),
  },
  {
    id: '05',
    label: '05. Acceptable Use Policy',
    title: '05. Acceptable Use Policy',
    content: (
      <p>
        You agree not to misuse the Service or help anyone else do so. Do not
        upload illegal or harmful content.
      </p>
    ),
  },
  {
    id: '06',
    label: '06. Premium Services',
    title: '06. Premium Services',
    content: (
      <p>
        Some features require payment. Fees are non-refundable except as
        required by law.
      </p>
    ),
  },
  {
    id: '07',
    label: '07. Intellectual Property',
    title: '07. Intellectual Property',
    content: (
      <p>
        We retain all rights to the Service. You retain rights to the content
        you upload.
      </p>
    ),
  },
  {
    id: '08',
    label: '08. Third-Party Services',
    title: '08. Third-Party Services',
    content: (
      <p>
        Our Service may contain links to third-party websites or services that
        are not owned or controlled by us.
      </p>
    ),
  },
  {
    id: '09',
    label: '09. Disclaimers',
    title: '09. Disclaimers',
    content: (
      <p>
        The Service is provided &quot;as is&quot;. We make no warranties,
        express or implied.
      </p>
    ),
  },
  {
    id: '10',
    label: '10. Limitation of Liability',
    title: '10. Limitation of Liability',
    content: (
      <p>
        We shall not be liable for any indirect, incidental, or consequential
        damages.
      </p>
    ),
  },
  {
    id: '11',
    label: '11. Indemnification',
    title: '11. Indemnification',
    content: (
      <p>
        You agree to indemnify us against any claims arising from your use of
        the Service.
      </p>
    ),
  },
  {
    id: '12',
    label: '12. Modifications to Terms',
    title: '12. Modifications to Terms',
    content: (
      <p>
        We may modify these terms at any time. Continued use of the Service
        constitutes acceptance of the modified terms.
      </p>
    ),
  },
  {
    id: '13',
    label: '13. Termination',
    title: '13. Termination',
    content: (
      <p>
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability.
      </p>
    ),
  },
  {
    id: '14',
    label: '14. Governing Law',
    title: '14. Governing Law',
    content: (
      <p>
        These Terms shall be governed by the laws of the jurisdiction in which
        we operate.
      </p>
    ),
  },
  {
    id: '15',
    label: '15. Severability',
    title: '15. Severability',
    content: (
      <p>
        If any provision of these Terms is held to be invalid, the remaining
        provisions will remain in effect.
      </p>
    ),
  },
  {
    id: '16',
    label: '16. Entire Agreement',
    title: '16. Entire Agreement',
    content: (
      <p>
        These Terms constitute the entire agreement between us regarding our
        Service.
      </p>
    ),
  },
  {
    id: '17',
    label: '17. Waiver',
    title: '17. Waiver',
    content: (
      <p>
        Our failure to enforce any right or provision will not be considered a
        waiver of those rights.
      </p>
    ),
  },
  {
    id: '18',
    label: '18. Contact Information',
    title: '18. Contact Information',
    content: (
      <p>
        If you have any questions about these Terms, please contact us at
        support@meetmind.com.
      </p>
    ),
  },
];

const TermsContent = () => {
  // Tracks which section is currently visible for scroll-spy highlighting
  const [activeSection, setActiveSection] = useState('welcome');
  // Controls mobile table-of-contents dropdown visibility
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  /**
   * IntersectionObserver for scroll-spy: highlights the active sidebar link
   * as the user scrolls through each section.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    termsData.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /** Smooth-scrolls to a section, accounting for the sticky header offset. */
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileTocOpen(false);
  };

  return (
    <div className="bg-white w-full pt-16 pb-24 font-sans">
      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-start justify-between">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] font-sans">
            Terms of Service
          </h1>
          {/* Decorative document icon — visible on desktop only */}
          <div className="hidden md:block opacity-20">
            <svg
              width="100"
              height="100"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_terms)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.0857 111.52C18.6345 110.242 16.6963 108.157 15.5988 105.614C15.4495 104.945 15.5684 104.244 15.93 103.661C16.2915 103.079 16.867 102.661 17.533 102.498L19.2689 102.18C24.4549 101.347 29.5689 100.116 34.5653 98.4964L35.5822 95.3967C36.3213 92.7497 36.999 90.0174 37.8382 87.6113C38.6725 85.206 39.036 84.1124 39.7517 82.1407C39.9509 81.7441 40.2393 81.399 40.5944 81.1327C40.9495 80.8664 41.3616 80.686 41.7981 80.6059C42.2347 80.5257 42.6839 80.5479 43.1105 80.6707C43.537 80.7935 43.9292 81.0136 44.2564 81.3136C45.5823 82.7206 46.8263 84.1985 47.9885 85.7474C49.6951 87.7878 51.2763 90.0037 52.9034 92.1653L54.9552 94.7015C60.1886 94.4873 65.3952 93.8407 70.522 92.7683L72.3023 92.4414C72.9901 92.366 73.6802 92.5611 74.2268 92.9853C74.7733 93.4096 75.1335 94.0298 75.231 94.7148C75.1057 97.4931 74.0156 100.139 72.1511 102.194C69.0666 105.745 65.7219 109.068 62.1433 112.115L62.8404 113.115C63.9379 114.912 68.2287 120.422 69.9842 124.141C70.579 125.11 70.9699 126.187 71.1257 127.312C71.1625 127.667 71.1229 128.026 71.0096 128.364C70.8964 128.702 70.712 129.012 70.469 129.273C69.5209 130.21 68.361 130.905 67.0875 131.299C65.8139 131.693 64.4642 131.775 63.1525 131.537C58.4795 130.585 54.0205 128.785 49.997 126.225C46.9008 129.998 43.2051 133.236 39.0578 135.809C37.9114 136.54 36.6086 136.991 35.2553 137.125C33.9019 137.258 32.5361 137.071 31.2687 136.578C30.9241 136.42 30.62 136.185 30.3795 135.892C30.1389 135.599 29.9682 135.255 29.8803 134.886C29.6113 133.765 29.5879 132.598 29.8117 131.467C30.2979 127.387 32.4535 120.744 32.8231 118.576C32.8231 118.576 32.6967 117.888 32.8604 117.395L31.875 117.012C28.1561 115.432 24.551 113.597 21.0857 111.52Z"
                  fill="#035A69"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.0528 37.1601C19.1454 35.279 19.6456 33.4405 20.5188 31.7717C21.4229 29.8822 22.8365 28.2826 24.6005 27.153C26.3645 26.0235 28.4089 25.4088 30.5033 25.3784L32.2744 24.6973C37.6614 22.5287 41.4829 20.5002 46.8026 18.2423C48.7031 17.4358 50.8176 16.6866 53.2632 15.7749C56.1207 14.7023 59.0139 13.7268 61.9376 12.8502C82.6669 6.69524 83.0126 4.42547 89.1692 8.41416C89.9395 8.86242 90.6214 9.42009 91.215 10.0872C96.2212 15.2581 98.8317 25.3221 113.202 62.6099C114.339 65.4768 117.036 69.8414 118.395 73.8925C119.223 75.8482 119.611 77.9618 119.532 80.084C119.282 81.0112 118.817 81.8664 118.174 82.5798C117.531 83.2932 116.729 83.8448 115.833 84.1896C110.527 86.8008 97.6053 89.7379 87.6312 93.6688C87.3369 93.8072 87.0076 93.8532 86.6866 93.8008C86.3656 93.7484 86.0681 93.6 85.8331 93.3751C85.5981 93.1503 85.4367 92.8596 85.3702 92.5412C85.3037 92.2229 85.3351 91.8919 85.4604 91.5917C85.6156 91.1913 85.9208 90.8672 86.3112 90.6882C93.2527 87.5174 101.705 84.7402 107.817 82.337C111.165 81.0561 115.704 79.8617 114.673 78.9785C114.628 78.7326 114.441 79.3769 114.428 79.5827C114.379 77.6754 113.895 75.8046 113.012 74.1135C111.565 70.6935 109.528 67.1278 108.469 64.7093C106.756 60.6722 104.842 56.6721 103.416 52.5316C92.3271 20.0197 95.2858 23.3145 89.5483 15.7666C88.6554 14.5953 87.6424 13.5358 86.5093 12.5882C84.9547 11.2098 83.0093 10.3499 80.9435 10.1279C76.8631 12.1583 72.7957 13.9828 68.602 15.673C64.4083 17.3632 59.8785 18.9118 55.2955 20.7243C48.4815 22.9007 44.1493 24.6672 39.2351 26.3371L37.209 27.0142C44.1574 30.8575 44.5101 33.609 52.3535 49.8292C53.0287 51.2913 53.6456 52.7133 54.2274 54.1925C54.8051 55.6776 55.2745 57.1267 55.7579 58.624C56.9134 62.1483 61.8629 77.3646 62.8216 80.925C62.9496 81.3205 62.9196 81.7502 62.7379 82.1241C62.5563 82.498 62.237 82.7872 61.847 82.9311C61.457 83.0749 61.0264 83.0623 60.6455 82.896C60.2645 82.7296 59.9626 82.4223 59.8031 82.0384C58.2141 78.7005 52.5139 63.8254 50.7422 60.5719C50.0751 59.154 49.4442 57.6838 48.8715 56.2537C48.3038 54.8227 47.6778 53.3516 47.2476 51.8394C43.6322 39.7079 38.2226 32.2574 35.1252 30.7266C34.2759 30.2092 33.3234 29.8844 32.335 29.7752C31.3465 29.6659 30.3461 29.7747 29.4042 30.0941C28.4624 30.4134 27.6021 30.9354 26.8839 31.6233C26.1657 32.3113 25.6072 33.1483 25.2476 34.0756C24.6341 35.3575 24.383 36.7863 24.5205 38.1997C24.6567 39.8828 24.9598 41.5335 25.4298 43.1519C25.9753 46.1223 26.9823 49.1146 27.9441 52.1101C28.8744 55.0911 29.957 58.0154 31.1919 60.8828L33.795 66.6983C34.0186 67.0549 34.2071 67.4323 34.3577 67.8252L35.597 67.5977C36.2695 67.4318 36.9111 67.1595 37.4976 66.7912C38.9828 66.5184 40.4827 68.5408 38.0972 70.0566C37.4073 70.6459 36.5963 71.0744 35.7198 71.3116C34.5922 71.6102 33.4051 71.5999 32.2829 71.2818C31.7825 71.1428 31.3558 70.8146 31.093 70.3666C30.7365 69.7317 30.4267 69.0716 30.1661 68.3916L27.1417 62.8009C25.6199 59.8844 24.2687 56.8909 23.0881 53.8203C21.9074 50.7124 20.9667 47.5554 20.0942 44.4926C19.4181 42.1066 19.0678 39.64 19.0528 37.1601Z"
                  fill="#035A69"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.9263 38.6022C49.8271 38.4118 49.7673 38.2034 49.7503 37.9895C49.7333 37.7755 49.7595 37.5603 49.8274 37.3567C49.8954 37.153 50.0035 36.9652 50.1456 36.8042C50.2876 36.6433 50.4605 36.5126 50.6541 36.4198C54.8771 34.0583 59.1582 31.737 63.6068 29.7458C67.4166 28.0394 71.347 26.6159 75.366 25.487C80.073 24.2962 84.8537 23.4184 89.6767 22.8592C90.045 22.7605 90.4373 22.8108 90.7688 22.9992C91.1002 23.1877 91.3441 23.499 91.4477 23.866C91.4967 24.0497 91.5077 24.2415 91.4801 24.4296C91.4526 24.6178 91.387 24.7983 91.2873 24.9603C91.1877 25.1223 91.0561 25.2622 90.9005 25.3716C90.745 25.4811 90.5688 25.5577 90.3827 25.5968C85.2308 27.3561 80.2422 29.4516 75.1142 31.3692C72.0555 32.5409 68.9567 33.5217 65.93 34.5909C61.1133 36.2379 56.6294 37.7323 52.1046 39.5849C51.8985 39.6768 51.6752 39.7241 51.4495 39.7236C51.2238 39.7231 51.0008 39.6749 50.7951 39.582C50.5893 39.4892 50.4056 39.3539 50.2558 39.1851C50.1061 39.0162 49.9938 38.8175 49.9263 38.6022Z"
                  fill="#035A69"
                />
              </g>
              <defs>
                <clipPath id="clip0_terms">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="matrix(-0.983556 0.180603 0.180603 0.983556 118.027 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Two-column layout: Sidebar + Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Sidebar Navigation */}
        <div className="lg:w-[220px] shrink-0">
          {/* Mobile: Compact collapsible dropdown — left-aligned, not full-width */}
          <div className="lg:hidden mb-6 sticky top-20 z-30">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-lg text-[#0F172A] font-semibold text-sm"
            >
              <span>Contents</span>
              {isMobileTocOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {isMobileTocOpen && (
              <div className="mt-1 bg-white border border-[#E2E8F0] rounded-lg p-3 shadow-lg max-h-[360px] overflow-y-auto w-[260px]">
                <ul className="space-y-0.5">
                  {termsData.map((section) => (
                    <li key={`m-${section.id}`}>
                      <button
                        onClick={() => handleScrollTo(section.id)}
                        className={`w-full text-sm text-left px-3 py-2 rounded transition-colors ${
                          activeSection === section.id
                            ? 'text-[#02505E] font-semibold'
                            : 'text-[#64748B] hover:text-[#0F172A]'
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Desktop: Sticky sidebar with its own independent scroll */}
          <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
              Contents
            </h3>
            <ul className="space-y-0.5">
              {termsData.map((section) => (
                <li key={`d-${section.id}`}>
                  <button
                    onClick={() => handleScrollTo(section.id)}
                    className={`w-full text-sm text-left py-1.5 transition-colors ${
                      activeSection === section.id
                        ? 'text-[#02505E] font-semibold'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[780px]">
          {termsData.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-28 mb-12"
            >
              <h2 className="text-[#0F172A] font-bold text-xl mb-4">
                {section.title}
              </h2>
              <div className="text-[#475569] text-base leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
