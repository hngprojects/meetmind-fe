import { useState } from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

export interface HireOption {
  value: string;
  title: string;
  description?: string;
}

interface Props {
  options: HireOption[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function HireRadioGroup({
  options,
  defaultValue,
  onValueChange,
}: Props) {
  const [selected, setSelected] = useState(defaultValue ?? '');

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange?.(value);
  };

  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const active = selected === opt.value;

        return (
          <div
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={cn(
              'flex items-center gap-4 cursor-pointer rounded-xl border p-4 transition-all relative',
              active
                ? 'border-teal-600 bg-white ring-1 ring-teal-600'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            )}
          >
            <div className="shrink-0 text-slate-400">
              <User size={20} />
            </div>

            <div className="grow">
              <p
                className={cn(
                  'font-semibold text-[15px]',
                  active ? 'text-slate-900' : 'text-slate-600'
                )}
              >
                {opt.title}
              </p>
              <p className="text-sm text-slate-400">{opt.description}</p>
            </div>
            <div className="shrink-0 ml-2 w-5 h-5 flex items-center justify-center">
              {active && (
                <div className="w-3 h-3 rounded-full bg-primary text-primary-foreground" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
