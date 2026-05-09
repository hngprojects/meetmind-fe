// Shared types for the LandingPage components

// Represents a single link in the footer columns
export interface FooterLink {
  label: string;
  href: string;
}

// Represents one column in the footer
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Represents a social media link
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
