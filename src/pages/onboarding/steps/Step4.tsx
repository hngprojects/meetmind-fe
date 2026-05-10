import MeetmindLogo from '@/assets/onboarding/MeetmindLogo.svg';
import { Button } from '@/components/ui/button';
import { onboardingStore } from '@/store/onboardingStore';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { IntegrationCard } from '../components/IntegrationCard';
import GoogleLogo from '@/assets/onboarding/Google.svg';
import ZoomLogo from '@/assets/onboarding/Google.svg';

const Step4 = () => {
  const { nextStep, prevStep } = onboardingStore();
  const [connections, setConnections] = useState({
    google: false,
    zoom: true,
  });
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

          <div className="w-full space-y-3 mb-8">
            <IntegrationCard
              name="Google Meet"
              logo={<img src={GoogleLogo} alt="Google" />}
              isConnected={connections.google}
              onConnect={() =>
                setConnections((prev) => ({ ...prev, google: true }))
              }
            />
            <IntegrationCard
              name="Zoom"
              logo={<img src={ZoomLogo} alt="Zoom" />}
              isConnected={connections.zoom}
              onConnect={() =>
                setConnections((prev) => ({ ...prev, zoom: true }))
              }
            />
          </div>
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
  );
};

export default Step4;
