import MeetmindLogo from '@/assets/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ChevronLeft } from 'lucide-react';

const Step3 = () => {
  const { nextStep, prevStep } = onboardingStore();
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
          <div className="flex flex-col gap-2">
            <label htmlFor="no-of-hires">Default interview tone</label>

            <div className="">First</div>
            <div className="">Second</div>
            <div className="">Third</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Button onClick={nextStep} size="lg" className="w-full">
            Continue
          </Button>
          <Button onClick={prevStep} variant="ghost" className="w-fit">
            <ChevronLeft></ChevronLeft>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
