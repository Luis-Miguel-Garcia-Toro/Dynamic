import { create } from "zustand";

const initialState = {
  authMethodSelected: undefined,
  contactList: [],
  currentStep: 1,
  hasPassword: false,
  nit: "",
  totalSteps: 4,
  verificationCode: undefined,
};

export const useLoginEmartDataStore = create((set) => ({
  ...initialState,
  changeNit: (nit) => set({ nit }),
  changeTotalSteps: (totalSteps) => set({ totalSteps }),
  changeContactList: (contactList) => {
    const hasPassword = contactList[0]
      ? contactList[0].state_password === 1
      : false;
    return set({ contactList, hasPassword });
  },
  changeAuthMethod: (authMethod) => set({ authMethodSelected: authMethod }),
  changeVerificationCode: (verificationCode) => set({ verificationCode }),
  onPrevStep: () =>
    set((state) => {
      if (state.currentStep > 1) {
        return { currentStep: state.currentStep - 1 };
      }
    }),
  onNextStep: () =>
    set((state) => {
      if (state.currentStep < state.totalSteps) {
        return { currentStep: state.currentStep + 1 };
      }
    }),
}));
