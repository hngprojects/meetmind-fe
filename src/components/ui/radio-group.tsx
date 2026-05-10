import { RadioGroup } from 'radix-ui';
import { UserIcon } from 'lucide-react';

export interface HireOption {
  value: string;
  title: string;
  description: string;
}

// 2. Define the Props for the component
interface HireRadioGroupProps {
  options: HireOption[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

// The Main Wrapper Component
export const HireRadioGroup = ({
  options,
  defaultValue,
  onValueChange,
}: HireRadioGroupProps) => {
  return (
    <RadioGroup.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className="flex flex-col gap-3"
    >
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl text-left transition-all hover:border-teal-700 data-[state=checked]:border-teal-700 data-[state=checked]:ring-1 data-[state=checked]:ring-teal-700 outline-none"
        >
          <div className="flex items-center gap-4">
            {/* Left Icon Section */}
            <div className="p-2 bg-slate-50 rounded-lg group-data-[state=checked]:bg-teal-50">
              <UserIcon className="w-5 h-5 text-slate-400 group-data-[state=checked]:text-teal-700" />
            </div>

            {/* Text Content */}
            <div>
              <p className="font-bold text-slate-900 leading-tight">
                {option.title}
              </p>
              <p className="text-sm text-slate-400">{option.description}</p>
            </div>
          </div>

          {/* Custom Radio Circle */}
          <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center group-data-[state=checked]:border-teal-700">
            <RadioGroup.Indicator className="w-2.5 h-2.5 bg-teal-700 rounded-full" />
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
