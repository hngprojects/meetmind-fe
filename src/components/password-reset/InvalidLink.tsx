import { CircleAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ==================== 🧩Main Component ====================
export default function InvalidLink() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F172A]/75 flex items-center justify-center md:bg-[#F7F9FB] h-full">
      <div className="p-4 max-w-[420px] flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="/Logo.svg" alt="logo" />
        </div>

        <div className="mt-8 p-6 bg-[#FEFEFF] rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="bg-[#FDECEC] rounded-full w-9 h-9 flex justify-center items-center mb-5">
              <CircleAlert
                strokeWidth={1.5}
                size={23}
                className="text-[#EF4444]"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Invalid link</h3>
              <p className="text-[#5E6470] mt-2 mb-3">
                The reset link is invalid, or already expired
              </p>
            </div>
            <button
              className={`text-sm text-white font-medium bg-[#02505E] rounded-md w-full p-3 mt-1`}
              onClick={() => navigate('/forgot-password')}
            >
              Request a new link
            </button>
          </div>
        </div>
        <p className="text-center mt-5 text-[#5E6470] text-sm">
          Check spam or promotion if you don't see it
        </p>
      </div>
    </div>
  );
}
