import { create } from 'zustand';

interface OnboardingData {
  companyName: string;
  role: string;
  hires: string;
  tone: string;
  preferences: {
    dynamic: boolean;
    autoRecord: boolean;
    announce: boolean;
  };
  integrations: {
    google: boolean;
    zoom: boolean;
  };
}

interface OnboardingState {
  step: StepNumber;
  data: OnboardingData;
  setStep: (step: StepNumber) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (partial: Partial<OnboardingData>) => void;
  reset: () => void;
}

export type StepNumber = 1 | 2 | 3 | 4 | 5;

const initialData: OnboardingData = {
  companyName: '',
  role: '',
  hires: '',
  tone: 'Friendly',
  preferences: {
    dynamic: true,
    autoRecord: true,
    announce: false,
  },
  integrations: {
    google: false,
    zoom: false,
  },
};

export const onboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  data: initialData,
  setStep: (step) => set({ step }),
  nextStep: () => {
    set((state) => ({ step: Math.min(state.step + 1, 5) as StepNumber }));
  },
  prevStep: () => {
    set((state) => ({
      step: Math.max(1, state.step - 1) as StepNumber,
    }));
  },
  updateData: (partial) =>
    set((state) => ({
      data: {
        ...state.data,
        ...partial,
        preferences: {
          ...state.data.preferences,
          ...partial.preferences,
        },
        integrations: {
          ...state.data.integrations,
          ...partial.integrations,
        },
      },
    })),
  reset: () =>
    set({
      step: 1,
      data: initialData,
    }),
}));
