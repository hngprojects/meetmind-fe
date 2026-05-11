import type React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-foreground">{label}</label>
      )}

      <input
        className={`
          w-full rounded-md border border-border bg-background
          px-3 py-2 text-sm outline-none transition
          focus:border-primary focus:ring-1 focus:ring-ring/30
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
          ${className ?? ''}
        `}
        {...props}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
