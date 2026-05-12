import {
  realTimeScorecard,
  preAssignedTask,
  roleBriefing,
  structuredSummary,
  timedGapAlerts,
  zoomMeetTeams,
  archiveIcon,
  checklistIcon,
  flagIcon,
  bookIcon,
  shieldIcon,
  videoIcon,
} from './assets';

export default function FeaturesGrid() {
  return (
    <section id="features" className="pt-28 pb-18">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#0F172A] text-[30px] md:text-[40px] font-semibold text-center">
          Features
        </h2>
        <p className="mt-2 text-[16px] text-[#5E6470] text-center max-w-86 md:max-w-140.25 mx-auto">
          Every part of the hiring workflow handled by a single intelligent
          participant.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-6">
          {/* Real Time Score Card */}
          <div className="lg:row-span-2 bg-white rounded-2xl p-6 flex flex-col justify-between items-center gap-6 lg:col-start-1 lg:gap-4">
            <img
              src={realTimeScorecard}
              className="w-full h-50 md:h-55 lg:h-50 object-cover rounded-lg mb-4"
              alt="Real-time scorecard tracking interface"
            />
            <div className="flex flex-col items-start">
              <img
                src={archiveIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Real-time scorecard tracking
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Live coverage bars for every competency on your scorecard. Know
                exactly what's been covered and what hasn't - without taking
                notes
              </p>
            </div>
          </div>

          {/* Pre Assigned Task */}
          <div className="lg:row-start-1 lg:col-start-2 bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-16">
            <img
              src={preAssignedTask}
              className="block w-full h-50 md:h-55 lg:h-50 object-cover rounded-xl shrink-0 lg:hidden"
              alt="Pre-assigned task queue interface"
            />

            <div className="w-full">
              <img
                src={checklistIcon}
                className="w-10 h-10 object-cover rounded-lg mb-3"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Pre-assigned task queue
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Queue instructions before the call begins.
              </p>
            </div>
            <img
              src={preAssignedTask}
              className="hidden lg:w-44 lg:h-36 lg:object-cover lg:rounded-xl lg:shrink-0 lg:block"
              alt="Pre-assigned task queue interface"
            />
          </div>

          {/* Role Briefing */}
          <div className="lg:row-start-2 lg:col-start-2 bg-white rounded-2xl p-6 flex flex-col justify-between lg:flex-row items-start lg:items-center gap-6 lg:gap-4">
            <img
              src={roleBriefing}
              className="block w-full h-50 md:h-55 lg:h-50 object-cover rounded-xl shrink-0 lg:hidden"
              alt="Role briefing & red flags interface"
            />
            <div>
              <img
                src={flagIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Role briefing & red flags
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                MeetMind internalizes warning signs to watch for.
              </p>
            </div>
            <img
              src={roleBriefing}
              className="hidden lg:w-44 lg:h-36 lg:object-cover lg:rounded-xl lg:shrink-0 lg:block"
              alt="Role briefing & red flags interface"
            />
          </div>

          {/* Zoom, Meet & Team Support */}
          <div className="lg:row-span-2 lg:row-start-3 lg:col-start-2 bg-white rounded-2xl p-6 flex flex-col items-start gap-6 lg:gap-4">
            <img
              src={zoomMeetTeams}
              className="w-full h-50 md:h-55 lg:h-50 object-cover rounded-lg mb-4"
              alt="Zoom, Meet & Teams support"
            />
            <div>
              <img
                src={videoIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Zoom, Meet & Teams support
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Works wherever you already run interviews. MeetMind joins as a
                named participant - no recordings required, no integration to
                install.
              </p>
            </div>
          </div>

          {/* Structured Summary */}
          <div className="lg:row-start-3 bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            <img
              src={structuredSummary}
              className="hidden lg:w-44 lg:h-36 lg:object-cover lg:rounded-xl lg:shrink-0 lg:block"
              alt="Structured summary interface"
            />
            <img
              src={structuredSummary}
              className="block w-full h-50 md:h-55 lg:h-50 object-cover rounded-xl shrink-0 lg:hidden"
              alt="Structured summary interface"
            />
            <div>
              <img
                src={bookIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Structured summary
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Organized notes ready immediately after.
              </p>
            </div>
          </div>

          {/* Timed Gap Alerts */}
          <div className="lg:row-start-4 bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <img
              src={timedGapAlerts}
              className="hidden lg:w-44 lg:h-36 lg:object-cover lg:rounded-xl lg:shrink-0 lg:block"
              alt="Timed gap alerts interface"
            />
            <img
              src={timedGapAlerts}
              className="block w-full h-50 md:h-55 lg:h-50 object-cover rounded-xl shrink-0 lg:hidden"
              alt="Timed gap alerts interface"
            />
            <div>
              <img
                src={shieldIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt=""
                aria-hidden="true"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Timed gap alerts
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Set thresholds to flag missed culture fit questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
