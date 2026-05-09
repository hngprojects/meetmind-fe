import { useId } from 'react';

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = '' }: LogoIconProps) {
  const gradientId = useId().replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill={`url(#${gradientId})`} />
      <path
        d="M32 10C20 10 12 20 12 32s8 22 20 22 20-10 20-22"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="32" r="7" fill="white" />
    </svg>
  );
}
