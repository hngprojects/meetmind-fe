import MeetmindLogo from '@/assets/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
const Step1 = () => {
  const { nextStep } = onboardingStore();
  return (
    <div className="flex flex-col  gap-4">
      <div>
        <img src={MeetmindLogo} alt="Meetmind Logo" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-7xl tracking-[-2%] leading-22">
            Run Interviews. Even when you can’t.
          </h1>
          <p className="text-2xl leading-8 font-normal tracking-[0%] text-[#5E6470]">
            Brief Meet Mind, step away, and come back to a fully structured
            interview summary — scorecard covered, flags raised, candidate
            responses logged.
          </p>
        </div>

        <Button
          className="bg-primary text-primary-foreground"
          onClick={nextStep}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Step1;
