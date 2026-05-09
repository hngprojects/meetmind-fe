import dashboardImageDesktop from './images/dashboard-desktop.png';
import dashboardImageMobile from './images/dashboard-mobile.png';

export default function DashboardPreview() {
  return (
    <section className="bg-[#F7F9FB] pb-16">
      <div className="flex justify-center max-w-7xl mx-auto px-6">
        {/* Desktop */}
        <img
          src={dashboardImageDesktop}
          alt="MeetMind dashboard preview showing interview tracking interface"
          className="hidden md:w-200 md:block h-auto rounded-lg"
        />
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
