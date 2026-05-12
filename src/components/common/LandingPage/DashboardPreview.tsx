import { dashboardImageDesktop, dashboardImageMobile } from './assets.ts';

export default function DashboardPreview() {
  return (
    <section className="bg-[#F7F9FB]">
      <div className="flex justify-center max-w-7xl mx-auto px-6">
        {/* Desktop */}
        <div className="hidden md:block md:h-176 md:overflow-hidden">
          <img
            src={dashboardImageDesktop}
            alt="MeetMind dashboard preview showing interview tracking interface"
            className="md:h-183"
          />
        </div>
        {/* Mobile */}
        <div className="w-[20rem] h-44 rounded-2xl overflow-hidden md:hidden">
          <img
            src={dashboardImageMobile}
            alt="MeetMind dashboard preview showing interview tracking interface"
            className="w-[20rem] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
