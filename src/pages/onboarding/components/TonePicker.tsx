import { useState } from 'react';
import { cn } from '@/lib/utils';

const TonePicker = () => {
  const tones = ['Friendly', 'Casual', 'Professional'];
  const [selectedTone, setSelectedTone] = useState('Friendly');
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-900">
        Default interview tone
      </label>

      <div className="flex gap-2">
        {tones.map((tone) => (
          <button
            key={tone}
            onClick={() => setSelectedTone(tone)}
            className={cn(
              'flex-1 py-2 h-13 text-sm font-medium rounded-lg border transition-all',
              selectedTone === tone
                ? 'border-primary text-primary bg-white shadow-sm'
                : 'border-border text-muted-foreground bg-white hover:border-slate-300 hover:text-slate-700'
            )}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TonePicker;
