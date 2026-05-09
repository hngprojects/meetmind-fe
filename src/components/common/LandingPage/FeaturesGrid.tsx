import realTimeScorecard from './images/real-time-scorecard-tracking.svg';
import preAssignedTask from './images/pre-assigned-task.jpg';
import roleBriefing from './images/role-briefing-red-flag.svg';
import structuredSummary from './images/structured-interview.jpg';
import timedGapAlerts from './images/timed-gap-alert.jpg';
import zoomMeetTeams from './images/zoom-chrome-image.jpg';
import archiveIcon from './images/archive-icon.svg';
import checklistIcon from './images/checklist-icon.svg';
import flagIcon from './images/flag-icon.svg';
import bookIcon from './images/book-icon.svg';
import shieldIcon from './images/alert-shield-icon.svg';
import videoIcon from './images/video-recorder-icon.svg';

export default function FeaturesGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#0F172A] text-3xl font-semibold text-center">
          Features
        </h2>
        <p className="mt-2 text-md md:text-sm text-[#5E6470] text-center max-w-lg mx-auto">
          Every part of the hiring workflow handled by a single intelligent
          participant.
        </p>

        <div className="mt-12 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 gap-6">
          {/* Row 1–2 Col 1 (spans 2 rows) */}
          <div className="row-start-1 row-span-2 bg-white rounded-2xl p-6 flex flex-col items-center gap-4">
            <img
              src={realTimeScorecard}
              className="w-full h-50 object-cover rounded-lg mb-4"
              alt="Real-time scorecard tracking interface"
            />
            <div className="flex flex-col items-start">
              <img
                src={archiveIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Archive Icon"
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

          {/* Row 1 Col 2 */}
          <div className="row-start-3 md:row-start-1 bg-white rounded-2xl p-6 flex justify-center items-center gap-16">
            <div>
              <img
                src={checklistIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Checklist Icon"
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
              className="w-44 h-36 object-cover rounded-xl shrink-0"
              alt="Pre-assigned task queue interface"
            />
          </div>

          {/* Row 2 Col 2 */}
          <div className="row-start-4 md:row-start-2 bg-white rounded-2xl p-6 flex items-center gap-4">
            <div>
              <img
                src={flagIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Flag Icon"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Role briefing & red flags
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Meet Mind internalizes warning signs to watch for.
              </p>
            </div>
            <img
              src={roleBriefing}
              className="w-44 h-36 object-cover rounded-xl shrink-0"
              alt="Role briefing & red flags interface"
            />
          </div>

          {/* Row 3 Col 1 */}
          <div className="row-start-7 md:row-start-3 bg-white rounded-2xl p-6 flex items-center gap-8">
            <img
              src={structuredSummary}
              className="w-44 h-36 object-cover rounded-xl shrink-0"
              alt="Structured summary interface"
            />
            <div>
              <img
                src={bookIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Boook Icon"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Structured summary
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Organized notes ready immediately after.
              </p>
            </div>
          </div>

          {/* Row 4 Col 1 */}
          <div className="row-start-8 md:row-start-4 bg-white rounded-2xl p-6 flex items-center gap-8">
            <img
              src={timedGapAlerts}
              className="w-44 h-36 object-cover rounded-xl shrink-0"
              alt="Timed gap alerts interface"
            />
            <div>
              <img
                src={shieldIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Shield Alert Icon"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Timed gap alerts
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Set thresholds to flag missed culture fit questions.
              </p>
            </div>
          </div>

          {/* Row 3–4 Col 2 (spans 2 rows) */}
          <div className="row-start-5 row-span-2 md:row-start-3 md:col-start-2 bg-white rounded-2xl p-6 flex flex-col items-start gap-4">
            <img
              src={zoomMeetTeams}
              className="w-full h-50 object-cover rounded-lg mb-4"
              alt="Zoom, Meet & Teams support"
            />
            <div>
              <img
                src={videoIcon}
                className="w-10 h-10 object-cover rounded-lg mb-6"
                alt="Video Icon"
              />
              <h3 className="text-[#0F172A] text-sm md:text-lg font-bold leading-tight">
                Zoom, Meet & Teams support
              </h3>
              <p className="text-sm md:text-lg text-[#3F4555] mt-2">
                Works wherever you already run interviews. Meet Mind joins as a
                named participant - no recordings required, no integration to
                install.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
