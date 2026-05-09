import logo from './images/meetmind-logo.svg';
import linkedinIcon from './images/linkedin-outline.svg';
import facebookIcon from './images/facebook-outline.svg';
import githubIcon from './images/github-outline.svg';
import instagramIcon from './images/instagram-outline.svg';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Use Cases', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'ChangeLog', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'SDK', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Tutorials', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'LinkedIn', icon: linkedinIcon, href: '#' },
  { name: 'Facebook', icon: facebookIcon, href: '#' },
  { name: 'GitHub', icon: githubIcon, href: '#' },
  { name: 'Instagram', icon: instagramIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-24 py-12 border-t border-[#E1E3E4]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex gap-6">
              <a href="/" className="flex items-center">
                <img src={logo} alt="MeetMind Logo" className="h-8 w-auto" />
              </a>
              <p className="font-bold text-[24px]">
                Meet<span className="text-[#4F46E5]">Mind</span>
              </p>
            </div>
            <p className="mt-4 text-sm text-[#3F4555] leading-relaxed">
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
                  className="text-[#94A3B8] hover:text-white transition-colors"
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
                      <a
                        href={link.href}
                        className="text-[#3F4555] text-sm hover:text-[#3F4555]/40 transition-colors"
                      >
                        {link.label}
                      </a>
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
          ©2026 MeetMind LTD. All right reserved.
        </p>
      </div>
    </footer>
  );
}
