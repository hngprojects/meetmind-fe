import { API_BASE_URL } from '@/lib/constants';
import { ArrowLeft, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

// ==================== 🧩Main Component ====================
export default function EmailSent({ setStep, email }: Props) {
  const [timeLeft, setTimeLeft] = useState(30);

  // countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const isCooldownActive = timeLeft > 0;

  async function handleResendEmail() {
    if (isCooldownActive) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
    } catch {
      setStep('enter-email');
    }

    // restart countdown
    setTimeLeft(30);
  }

  return (
    <div className="bg-[#0F172A]/75 flex items-center justify-center md:bg-[#F7F9FB] h-full">
      <div className="p-4 max-w-[420px] flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="/Logo.svg" alt="logo" />
        </div>

        <div className="mt-8 p-6 bg-[#FEFEFF] rounded-2xl">
          <div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Check your inbox</h3>
              <p className="text-[#5E6470] mt-2 mb-3">
                We've sent a password reset link to your email address
              </p>
            </div>

            <div className="mb-1 flex text-sm text-[#25B788] items-center gap-2 p-3 px-4 bg-[#E9F8F3] rounded-xl">
              <CircleCheck size={15} />
              <p>Email sent successfully</p>
            </div>

            <button
              //   disabled={isSubmitting}
              className={`text-sm font-medium bg-[#E1E3E4] rounded-md w-full p-2 mt-4 ${
                isCooldownActive
                  ? 'text-white cursor-not-allowed font-extrabold'
                  : 'text-[#060A12] cursor-pointer'
              }`}
              onClick={handleResendEmail}
            >
              {isCooldownActive
                ? `Resend email (${timeLeft}s)`
                : 'Resend email'}
            </button>

            <button
              className="text-[#060A12] text-sm bg-[#E1E3E4] rounded-md w-full p-2 mt-4 cursor-pointer font-medium"
              onClick={() => setStep('enter-email')}
            >
              Change email
            </button>

            <a
              href="/signUp"
              className="flex text-[#5E6470] gap-2 mt-5 justify-center text-sm"
            >
              <ArrowLeft strokeWidth={1.5} className="text-[#91949D]" />{' '}
              <span className="pt-[2px]">Back to login</span>
            </a>
          </div>
        </div>
        <p className="text-center mt-5 text-[#5E6470] text-sm">
          Check spam or promotion if you don't see it
        </p>
      </div>
    </div>
  );
}
