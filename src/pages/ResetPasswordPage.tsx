import InvalidLink from '@/components/password-reset/InvalidLink';
import LeftSide from '@/components/password-reset/LeftSideLayout';
import ResetPasswordForm from '@/components/password-reset/ResetPasswordForm';
import ResetSuccess from '@/components/password-reset/ResetSuccess';
import RightSideLayout from '@/components/password-reset/RightSideLayout';
import { useState } from 'react';

// ==================== 🧩Main Component ====================
export default function ResetPasswordPage() {
  const [step, setStep] = useState('new-password');
  // const [step, setStep] = useState('invalid-link');
  // const [step, setStep] = useState('success');

  return (
    <div className="relative bg-[url('/images/bg-img.jpg')] h-screen bg-no-repeat bg-cover bg-position-[0%_30%]">
      <div className="grid grid-cols-1 h-full md:grid-cols-2">
        <LeftSide />

        <RightSideLayout>
          {step === 'new-password' && <ResetPasswordForm setStep={setStep} />}

          {step === 'invalid-link' && <InvalidLink />}

          {step === 'success' && <ResetSuccess />}
        </RightSideLayout>
      </div>
    </div>
  );
}
