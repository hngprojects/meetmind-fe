import { useId } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface PasswordFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggleVisibility: () => void;
  helperText?: string;
}

export default function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  visible,
  onToggleVisibility,
  helperText,
}: PasswordFieldProps) {
  const inputId = useId();

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-semibold text-slate-900"
      >
        {label}
      </label>

      <div className="relative flex items-center">
        <span className="pointer-events-none absolute left-3.5 flex items-center justify-center text-gray-400">
          <Lock className="h-4 w-4" />
        </span>

        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required
          className="w-full rounded-lg border border-gray-200 bg-[#fafafa] py-3 pl-11 pr-11 text-[15px] text-slate-900 placeholder:text-gray-400 transition focus:border-blue-500 focus:bg-white focus:outline-none"
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute right-3 inline-flex items-center justify-center text-slate-700 transition hover:text-slate-900"
          aria-label={
            visible
              ? `Hide ${label.toLowerCase()}`
              : `Show ${label.toLowerCase()}`
          }
        >
          {visible ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {helperText ? (
        <p className="text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
}
