import EmailSent from '@/components/password-reset/EmailSent';
import EnterEmailForm from '@/components/password-reset/EnterEmailForm';
import LeftSide from '@/components/password-reset/LeftSideLayout';
import RightSideLayout from '@/components/password-reset/RightSideLayout';
import { useState } from 'react';

// ==================== 🧩Main Component ====================
export default function ForgotPasswordPage() {
  const [step, setStep] = useState('enter-email');
  // const [step, setStep] = useState('email-sent');
  const [email, setEmail] = useState('');

  return (
    <div className="relative bg-[url('/images/bg-img.jpg')] h-screen bg-no-repeat bg-cover bg-position-[0%_30%]">
      <div className="grid grid-cols-1 h-full md:grid-cols-2">
        <LeftSide />

        <RightSideLayout>
          {step === 'enter-email' && (
            <EnterEmailForm setStep={setStep} setEmail={setEmail} />
          )}

          {step === 'email-sent' && (
            <EmailSent setStep={setStep} email={email} />
          )}

          {/* {step === 'reset-password' && <ResetPasswordForm setStep={setStep} />} */}

          {/* {step === 'success' && <ResetSuccess />} */}
        </RightSideLayout>
      </div>
    </div>
  );
}
