import { create } from "zustand"

const initialState = {
  authMethodSelected: undefined,
  contactList: [],
  businessList: [],
  contactSelected: undefined,
  currentStep: 1,
  hasPassword: false,
  nit: "",
  totalSteps: 3,
  validatedCode: false,
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
  changeContactSelected: (contactSelected) => set({ contactSelected }),
  changeVerificationCode: (verificationCode) => set({ verificationCode }),
  changeValidatedCode: (validatedCode) => set({ validatedCode }),
  changeBusinessList: (businessList) => set({ businessList }),
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
  resetData: () => set({ ...initialState }),
}));
