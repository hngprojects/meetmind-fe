import MeetmindLogo from '@/assets/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ChevronLeft } from 'lucide-react';

const Step5 = () => {
  const { nextStep, prevStep } = onboardingStore();
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={MeetmindLogo} alt="Meetmind Logo" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-12 text-center">
            Welcome To MeetMind
          </h3>
          <p className="font-medium text-center max-w-sm">
            You’re in. Let’s do a quick 30-second tour so you know exactly where
            everything lives.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button onClick={nextStep} size="lg" className="w-full">
          Take the tour
        </Button>
        <Button onClick={prevStep} variant="ghost" className="w-fit">
          <ChevronLeft></ChevronLeft>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Step5;
