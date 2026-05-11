import { CircleCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ==================== 🧩Main Component ====================
export default function ResetSuccess() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F172A]/75 flex items-center justify-center md:bg-[#F7F9FB] h-full">
      <div className="p-4 max-w-[420px] flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="/Logo.svg" alt="logo" />
        </div>

        <div className="mt-8 p-6 bg-[#FEFEFF] rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="bg-[#E9F8F3] rounded-full w-9 h-9 flex justify-center items-center mb-5">
              <CircleCheck
                strokeWidth={1.5}
                size={23}
                className="text-[#10B982DD]"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Password reset successful</h3>
              <p className="text-[#5E6470] mt-2 mb-3">
                Your password has been updated. You can now log in with your new
                password.
              </p>
            </div>
            <button
              className={`text-sm text-white font-medium bg-[#02505E] rounded-md w-full p-3 mt-1`}
              onClick={() => navigate('/signUp')}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
