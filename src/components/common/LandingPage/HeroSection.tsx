import taskList from './images/task-list-star.svg';
import duo from './images/google-duo.svg';
import zoom from './images/zoom.svg';
import chat from './images/google-chat.svg';

export default function HeroSection() {
  return (
    <section className="bg-[#F7F9FB] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-start md:gap-18">
          <img
            src={taskList}
            alt="Task List Star"
            className="h-auto w-10 md:w-16"
          />
          <h2 className="font-serif text-4xl md:text-6xl text-[#0F172A] tracking-[-0.15rem] leading-[1.4] md:tracking-[-0.3rem] md:leading-none">
            Interview better. <br />{' '}
            <span className="text-[#035A69]">Remember everything.</span>
          </h2>
          <img src={duo} alt="Google Meet" className="w-10 md:w-18" />
        </div>
        <p className="mt-2 text-sm max-w-xs md:mt-4 md:text-lg text-[#5E6470] md:max-w-lg mx-auto">
          MeetMind joins your call, tracks coverage, and delivers a structured
          summary instantly.
        </p>

        {/* Buttons */}
        <div className="flex justify-start gap-16 mt-4 items-start md:justify-center md:items-end md:mt-0 md:gap-42">
          <img src={chat} alt="Google Chat" className="w-10 md:w-22" />
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#"
              className="px-6 py-3 bg-[#02505E] text-white font-semibold rounded-lg text-base hover:bg-[#FFFFFF] hover:text-[#013A44] hover:border hover:border-[#DADADA] transition-colors"
            >
              Get early access
            </a>

            <a
              href="#"
              className="px-8 py-3 border border-[#DADADA] text-[#02505E] font-semibold rounded-lg text-base hover:bg-[#02505E] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Watch a Demo
            </a>
          </div>
          <img src={zoom} alt="Zoom" className="hidden md:w-22 md:block" />
        </div>

        <p className="mt-12 text-sm max-w-sm md:mt-10 md:text-md text-[#5E6470] md:max-w-lg mx-auto">
          Trusted by <span className="text-[#0F172A]">40+ HR team</span>. Works
          with Zoom, Google Meet & Teams.
        </p>
      </div>
    </section>
  );
}
