import realTimeScorecard from './images/real-time-scorecard-tracking.svg';
import preAssignedTask from './images/pre-assigned-task.jpg';
import roleBriefing from './images/role-briefing-red-flag.svg';
import structuredSummary from './images/structured-interview.jpg';
import timedGapAlerts from './images/timed-gap-alert.jpg';
import zoomMeetTeams from './images/zoom-chrome-image.jpg';

export default function FeaturesGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#0F172A] text-3xl font-semibold text-center">
          Features
        </h2>
        <p className="mt-2 text-sm md:text-md text-[#5E6470] text-center max-w-lg mx-auto">
          Every part of the hiring workflow handled by a single intelligent
          participant.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6">
          {/* Row 1–2 Col 1 (spans 2 rows) */}
          <div className="row-span-2 bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={realTimeScorecard}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Real-time scorecard tracking interface"
            />
            <h3 className="font-semibold text-lg">
              Real-time scorecard tracking
            </h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Live coverage bars for every competency...
            </p>
          </div>

          {/* Row 1 Col 2 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={preAssignedTask}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Pre-assigned task queue interface"
            />
            <h3 className="font-semibold text-lg">Pre-assigned task queue</h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Queue instructions before the call begins.
            </p>
          </div>

          {/* Row 2 Col 2 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={roleBriefing}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Role briefing & red flags interface"
            />
            <h3 className="font-semibold text-lg">Role briefing & red flags</h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Meet Mind internalizes warning signs...
            </p>
          </div>

          {/* Row 3 Col 1 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={structuredSummary}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Structured summary interface"
            />
            <h3 className="font-semibold text-lg">Structured summary</h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Organized notes ready immediately after.
            </p>
          </div>

          {/* Row 4 Col 1 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={timedGapAlerts}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Timed gap alerts interface"
            />
            <h3 className="font-semibold text-lg">Timed gap alerts</h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Flags missed culture fit questions.
            </p>
          </div>

          {/* Row 3–4 Col 2 (spans 2 rows) */}
          <div className="row-span-2 row-start-3 col-start-2 bg-white rounded-2xl p-6 flex flex-col">
            <img
              src={zoomMeetTeams}
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Zoom, Meet & Teams support"
            />
            <h3 className="font-semibold text-lg">
              Zoom, Meet & Teams support
            </h3>
            <p className="text-sm text-[#5E6470] mt-2">
              Works wherever you already run interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
