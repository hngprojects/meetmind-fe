import MeetmindLogo from '@/assets/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ChevronLeft } from 'lucide-react';

const Step4 = () => {
  const { nextStep, prevStep } = onboardingStore();
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={MeetmindLogo} alt="Meetmind Logo" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-12 text-center">
            Connect Your Meeting Tool
          </h3>
          <p className="font-medium text-center max-w-sm">
            MeetMind AI needs to join your calls. Connect at least one platform
          </p>
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
  );
};

export default Step4;
