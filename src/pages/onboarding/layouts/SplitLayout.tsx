import type { ReactNode } from 'react';
import { Brain, BellDot, ClipboardCheck, Notebook } from 'lucide-react';

const SplitLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex bg-background">
      <div className="w-1/2 flex flex-col justify-center items-center px-16 py-10">
        {children}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2.5 bg-card rounded-3xl p-6">
              <div className="p-2.5">
                <Brain size={24} />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-8 tracking-[-2%]">
                  Fully autonomous
                </h3>
                <p className="bg-[hsla(220, 9%, 40%, 1)]">
                  Meet Mind conducts the interview on your behalf. You don't
                  need to be on the call.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 bg-card rounded-3xl p-6">
              <div className="p-2.5">
                <BellDot size={24} />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-8 tracking-[-2%]">
                  Real-time feedback
                </h3>
                <p className="bg-[hsla(220, 9%, 40%, 1)]">
                  Analyze candidate responses instantly to make faster
                  decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 bg-card rounded-3xl p-6">
              <div className="p-2.5">
                <ClipboardCheck size={24} />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-8 tracking-[-2%]">
                  Customizable questions
                </h3>
                <p className="bg-[hsla(220, 9%, 40%, 1)]">
                  Tailor the interview flow to fit your company’s unique
                  requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 bg-card rounded-3xl p-6">
              <div className="p-2.5">
                <Notebook size={24} />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-8 tracking-[-2%]">
                  Panel-ready summaries
                </h3>
                <p className="bg-[hsla(220, 9%, 40%, 1)]">
                  Structured output — rated, noted, and ready to share the
                  moment the call ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
