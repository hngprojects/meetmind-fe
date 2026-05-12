import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Eye, EyeClosed, Lock, ArrowLeft, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { API_BASE_URL } from '@/lib/constants';

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must contain uppercase letter')
      .regex(/[a-z]/, 'Must contain lowercase letter')
      .regex(/[@#$%]/, 'Must contain one symbol (@,#,$,%)'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

interface Props {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

// ==================== 🧩Main Component ====================
export default function ResetPasswordForm({ setStep }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
  });

  const password = watch('password', '');

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    symbol: /[@#$%]/.test(password),
  };

  const isPasswordValid =
    validations.length &&
    validations.uppercase &&
    validations.lowercase &&
    validations.symbol;

  const onInvalid = () => {
    setSubmitAttempted(true);
  };

  async function onValid(data: ResetPasswordFormData) {
    // setPasswordResetSuccessful(false);

    const DataSentToApi = { token, password: data.password };

    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(DataSentToApi),
      });

      if (!res.ok) {
        // token is invalid, expired, or already used

        setStep('invalid-link');
        return;
        // throw new Error('Something went wrong');
      }

      reset();

      setStep('success');
    } catch {
      // setPasswordResetSuccessful(false);
    }
  }

  return (
    <div className="bg-[#F7F9FB] flex items-center justify-center h-full">
      <div className="p-4 max-w-[420px] flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="/Logo.svg" alt="logo" />
        </div>
        <div className="mt-8 p-4 bg-[#FEFEFF] rounded-2xl">
          <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <div className="text-center">
              <h3 className="font-bold text-xl">Create a new Password</h3>
              <p className="text-[#5E6470] mt-2 mb-3">
                Your new password must be different from the previous passwords.
              </p>
            </div>

            <label className="block mb-4">
              <p className="mb-1">New Password</p>

              <div className="relative">
                {/* key icon */}
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-10 pr-10 py-2.5 border rounded-lg text-gray-800 text-sm font-medium"
                  {...register('password')}
                />

                {/* eye toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>

              {/* Validation List */}
              {password.length > 0 && !isPasswordValid && (
                <div className="mt-4 space-y-2">
                  <ValidationItem
                    text="At least 8 characters"
                    valid={validations.length}
                    submitAttempted={submitAttempted}
                  />

                  <ValidationItem
                    text="Upper case letter (A-Z)"
                    valid={validations.uppercase}
                    submitAttempted={submitAttempted}
                  />

                  <ValidationItem
                    text="Lower case letter (a-z)"
                    valid={validations.lowercase}
                    submitAttempted={submitAttempted}
                  />

                  <ValidationItem
                    text="One symbol (@,#,$,%)"
                    valid={validations.symbol}
                    submitAttempted={submitAttempted}
                  />
                </div>
              )}
            </label>

            <label className="block mb-4">
              <p className="mb-1">Confirm Password</p>

              <div className="relative">
                {/* key icon */}
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                <input
                  type={showConfirm ? 'text' : 'password'}
                  className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-gray-800 text-sm font-medium ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300 focus-within:border-[#005c67]'
                  }`}
                  {...register('confirmPassword')}
                />

                {/* eye toggle */}
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
              {/* Error */}
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </label>

            <button
              disabled={isSubmitting}
              className={`w-full text-white bg-[#02505E] rounded-xl p-2 transistion-all ${
                isSubmitting
                  ? 'bg-[#02505E]/70 cursor-not-allowed opacity-70'
                  : 'bg-[#02505E] hover:bg-[#013f4a] cursor-pointer'
              } `}
            >
              {isSubmitting ? 'Resetting...' : 'Reset password'}
            </button>

            <a
              href="/signUp"
              className="flex text-[#5E6470] gap-2 mt-5 justify-center"
            >
              <ArrowLeft /> Back to Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

interface ValidationItemProps {
  text: string;
  valid: boolean;
  submitAttempted: boolean;
}

function ValidationItem({ text, valid, submitAttempted }: ValidationItemProps) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        !submitAttempted
          ? valid
            ? 'text-green-500'
            : 'text-gray-400' // before submit
          : valid
            ? 'text-green-500' // correct
            : 'text-red-500' // wrong after submit
      }`}
    >
      <Check size={16} />
      <span>{text}</span>
    </div>
  );
}
