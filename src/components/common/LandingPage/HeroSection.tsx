import { Link } from 'react-router-dom';
import { taskList, duo, zoom, chat } from './assets';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#F7F9FB] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-start">
          <img
            src={taskList}
            alt="Task List Star"
            className="h-auto w-10 md:w-16"
          />
          <h1 className="font-serif text-4xl md:text-6xl text-[#0F172A] tracking-[-0.15rem] leading-[1.4] md:tracking-[-0.3rem] md:leading-none">
            Interview better. <br />{' '}
            <span className="text-[#035A69]">Remember everything.</span>
          </h1>
          <img src={duo} alt="Google Meet" className="w-10 md:w-18" />
        </div>
        <p className="mt-2 text-sm max-w-xs md:mt-4 md:text-lg text-[#5E6470] md:max-w-lg mx-auto">
          MeetMind joins your call, tracks coverage, and delivers a structured
          summary instantly.
        </p>

        {/* Buttons */}
        <div className="flex justify-start gap-16 mt-4 items-start md:justify-center md:items-end md:mt-0 md:gap-42">
          <img
            src={chat}
            alt="Google Chat"
            className="hidden md:block md:w-22"
          />
          {/* Desktop & Tablet View */}
          <div className="hidden mt-10 md:flex md:flex-col lg:flex-row items-center justify-center gap-6">
            <Link
              to="/signup"
              className="px-6 py-3 bg-[#02505E] text-white font-semibold rounded-lg text-base hover:bg-[#FFFFFF] hover:text-[#013A44] hover:border hover:border-[#DADADA] transition-colors cursor-pointer"
            >
              Get early access
            </Link>

            <button
              type="button"
              onClick={() => console.log('Watch Demo clicked')}
              className="px-8 py-3 border border-[#DADADA] text-[#02505E] font-semibold rounded-lg text-base hover:bg-[#02505E] hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Watch a Demo
            </button>
          </div>

          {/* Mobile view */}
          <div className="mt-10 mx-auto flex md:hidden items-start justify-center relative w-full px-16">
            <img
              src={chat}
              alt="Google Chat Icon"
              className="w-12 absolute left-8 md:hidden"
            />
            <div className="flex flex-col items-center gap-6">
              <Link
                to="/signup"
                className="px-6 py-3 bg-[#02505E] text-white font-semibold rounded-lg text-base hover:bg-[#FFFFFF] hover:text-[#013A44] hover:border hover:border-[#DADADA] transition-colors cursor-pointer"
              >
                Get early access
              </Link>

              <button
                type="button"
                onClick={() => console.log('Watch Demo clicked')}
                className="px-8 py-3 border border-[#DADADA] text-[#02505E] font-semibold rounded-lg text-base hover:bg-[#02505E] hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Watch a Demo
              </button>
            </div>
          </div>
          <img src={zoom} alt="Zoom" className="hidden md:w-22 md:block" />
        </div>

        <p className="mt-12 text-sm max-w-sm md:mt-10 md:text-md text-[#5E6470] md:max-w-lg mx-auto">
          Trusted by <span className="text-[#0F172A]">40+ HR teams</span>. Works
          with Zoom, Google Meet & Teams.
        </p>
      </div>
    </section>
  );
}
