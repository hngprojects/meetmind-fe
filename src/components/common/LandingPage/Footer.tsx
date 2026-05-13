import {
  logo,
  linkedinIcon,
  facebookIcon,
  githubIcon,
  instagramIcon,
} from './assets';

const footerColumns = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Integration', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Tutorials', href: '#' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: instagramIcon, href: '#' },
  { name: 'LinkedIn', icon: linkedinIcon, href: '#' },
  { name: 'Facebook', icon: facebookIcon, href: '#' },
  { name: 'GitHub', icon: githubIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 border-t border-[#E1E3E4]">
        <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-start lg:justify-between gap-12">
          <div className="max-w-xs md:max-w-lg lg:max-w-xs md:flex flex-col md:items-center lg:items-start">
            <div className="flex gap-6">
              <a href="#hero" className="flex items-center">
                <img src={logo} alt="MeetMind Logo" className="h-8 w-auto" />
              </a>
              <p className="font-bold text-[24px]">
                Meet<span className="text-[#4F46E5]">Mind</span>
              </p>
            </div>
            <p className="mt-4 text-sm text-[#3F4555] md:text-center lg:text-start leading-relaxed">
              MeetMind joins your call, tracks coverage, and delivers a
              structured summary instantly.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img src={social.icon} alt="" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-[#0F172A] text-sm font-semibold mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        className="text-[#3F4555] text-sm hover:text-[#3F4555]/40 transition-colors text-left cursor-pointer"
                        onClick={() => console.log(`${link.label} clicked`)}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border border-[#E1E3E4]" />

        {/* Copyright */}
        <p className="mt-8 text-center text-[#64748B] text-xs">
          ©2026 MeetMind LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
