const initialState = {
  configPages: {
    globals: {
      headerHeight: 60,
      isActiveSideCart: false,
    },
    loginScreens: {
      userDocument: undefined,
    },
  },
};

export const createUiSlice = (set) => ({
  ...initialState,
  updateConfigPage: (newConfigPages) => {
    return set((state) => ({
      configPages: { ...state.configPages, ...newConfigPages },
    }));
  },
  changeHeaderHeight: (height) => {
    const root = document.querySelector(":root");
    root.style.setProperty(`--header-height`, height);

    return set((state) => ({
      configPages: {
        ...state.configPages,
        globals: {
          ...state.configPages.globals,
          headerHeight: height,
        },
      },
    }));
  },
  toggleActiveSideCart: () => {
    return set((state) => ({
      configPages: {
        ...state.configPages,
        globals: {
          ...state.configPages.globals,
          isActiveSideCart: !state.configPages.globals.isActiveSideCart,
        },
      },
    }));
  },
  
  setUserDocument: (userDocument) => {
    return set((state) => ({
      configPages: {
        ...state.configPages,
        loginScreens: {
          ...state.configPages.loginScreens,
          userDocument,
        },
      },
    }));
  },
});
