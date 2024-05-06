import { create } from "zustand";

const initialState = {
  authMethodSelected: undefined,
  contactList: [],
  businessList: [],
  contactSelected: undefined,
  currentStep: 1,
  hasPassword: false,
  nit: "",
  totalSteps: 3,
  verificationCode: undefined,
  currentAuthMethodScreen: undefined,
};

export const useLoginEmartDataStore = create((set) => ({
  ...initialState,
  changeNit: ({ nit, contactList }) => {
    const hasPassword = contactList[0]
      ? contactList[0].state_password === 1
      : false;

    return set({
      authMethodSelected: undefined,
      businessList: [],
      contactList,
      contactSelected: undefined,
      currentAuthMethodScreen: undefined,
      hasPassword,
      nit,
      verificationCode: undefined,
    });
  },
  changeTotalSteps: (totalSteps) => set({ totalSteps }),
  changeAuthMethod: (authMethod) => set({ authMethodSelected: authMethod }),
  changeContactSelected: ({ contactSelected, code, business }) => {
    return set({
      contactSelected,
      verificationCode: code,
      businessList: business,
    });
  },
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
  changeCurrentAuthMethodScreen: (screenName) =>
    set({ currentAuthMethodScreen: screenName }),
  resetData: () => set({ ...initialState }),
}));
