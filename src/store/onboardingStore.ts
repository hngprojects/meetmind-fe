import { create } from 'zustand';

interface OnboardingState {
  step: StepNumber;
  setStep: (step: StepNumber) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export type StepNumber = 1 | 2 | 3 | 4 | 5;

export const onboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  nextStep: () => {
    set((state) => ({ step: Math.min(state.step + 1, 5) as StepNumber }));
  },
  prevStep: () => {
    set((state) => ({
      step: Math.max(1, state.step - 1) as StepNumber,
    }));
  },
}));
