import MeetmindLogo from '@/assets/onboarding/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ArrowLeft } from 'lucide-react';
import { HireRadioGroup, type HireOption } from '../components/RadioCard';
import Input from '../components/Input';
import Select from '../components/Select';

const hireOptions: HireOption[] = [
  {
    value: '1-5',
    title: '1 - 5 hires',
    description: 'Small team or solo recruiter',
  },
  {
    value: '6-20',
    title: '6-20 hires',
    description: 'Small team or solo recruiter',
  },
  {
    value: '20+',
    title: '20+ hires',
    description: 'High-volume and enterprise hiring',
  },
];

const Step2 = () => {
  const { nextStep, prevStep } = onboardingStore();
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img src={MeetmindLogo} alt="Meetmind Logo" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-12 text-center">
            Set Up Your Workplace
          </h3>
          <p className="font-medium text-center max-w-sm">
            Tell us a bit about how how you’ll use MeetMind. we’ll tailor things
            for you
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input label="Company name" placeholder="e.g Emerj LLC" />
          <Select
            options={[
              { value: 'ceo', label: 'CEO' },
              { value: 'founder', label: 'Founder' },
              { value: 'engineer', label: 'Engineer' },
            ]}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="no-of-hires">How many hires are you planning</label>

            <HireRadioGroup
              options={hireOptions}
              defaultValue="1-5"
              onValueChange={(val) => console.log('Selected:', val)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Button
            onClick={nextStep}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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

export default Step2;
