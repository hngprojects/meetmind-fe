import MeetmindLogo from '@/assets/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ArrowLeft } from 'lucide-react';
import TonePicker from '../components/TonePicker';
import { ToggleCard } from '../components/ToggleCard';
import { useState } from 'react';

interface Preferences {
  dynamic: boolean;
  autoRecord: boolean;
  announce: boolean;
}

const Step3 = () => {
  const { nextStep, prevStep } = onboardingStore();
  const [preferences, setPreferences] = useState<Preferences>({
    dynamic: true,
    autoRecord: true,
    announce: false,
  });
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={MeetmindLogo} alt="Meetmind Logo" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-12 text-center">
            Set Your AI Preferences
          </h3>
          <p className="font-medium text-center max-w-sm">
            These become the default for every interview. Override anytime per
            interview.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <TonePicker />

          <div className="flex flex-col gap-3">
            <ToggleCard
              title="Dynamic follow-ups"
              description="AI adapts questions based on interviews"
              enabled={preferences.dynamic}
              onToggle={() =>
                setPreferences((prev) => ({ ...prev, dynamic: !prev.dynamic }))
              }
            />
            <ToggleCard
              title="Auto record all interviews"
              description="Every session recorded by default"
              enabled={preferences.autoRecord}
              onToggle={() =>
                setPreferences((prev) => ({
                  ...prev,
                  autoRecord: !prev.autoRecord,
                }))
              }
            />
            <ToggleCard
              title="Announce recording to client"
              description="AI notifies candidate at the start"
              enabled={preferences.announce}
              onToggle={() =>
                setPreferences((prev) => ({
                  ...prev,
                  announce: !prev.announce,
                }))
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Button
            onClick={nextStep}
            size="lg"
            className="w-full bg-primary text-primary-foreground"
          >
            Continue
          </Button>
          <Button onClick={prevStep} variant="ghost" className="w-fit">
            <ArrowLeft></ArrowLeft>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
