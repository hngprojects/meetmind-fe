import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import taskListStar from '@/assets/icons/task-list-star.svg';

export default function HeaderSection() {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-6 max-w-7xl mx-auto w-full">
      <div className="relative w-full bg-white rounded-3xl overflow-hidden mt-16 md:mt-20 lg:mt-25 mb-8 md:mb-12 h-48 md:h-64 px-6 md:px-12 flex flex-col justify-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium z-20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-2 md:gap-4 z-10 w-full mt-4 md:mt-0 md:pr-20 lg:pr-50">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-medium md:mt-3">
            Last updated: May 2026
          </p>
        </div>

        {/* Background Icon */}
        <div className="absolute -right-4 -bottom-8 md:-right-12 md:-bottom-12  lg:-right-4 lg:-bottom-9 w-35 h-35 md:w-50 md:h-50 select-none pointer-events-none opacity-20 z-0">
          <img
            src={taskListStar}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
