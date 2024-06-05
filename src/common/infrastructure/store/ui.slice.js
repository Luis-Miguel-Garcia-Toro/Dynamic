const initialState = {
  configPages: {
    globals: {
      headerHeight: 60,
    },
  },
  theme: {
    colors: {
      primary: "#123C5C",
      secondary: "#f4d224",
      text: "#132436",
    },
  },
};

export const createUiSlice = (set) => ({
  ...initialState,
  updateTheme: (theme) => set({ theme }),
  updateConfigPage: (configPages) => {
    const newConfigPages = {
      ...configPages,
      cart: {
        ...configPages.cart,
        isActiveSideCart: false,
      },
    };

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
        cart: {
          ...state.configPages.cart,
          isActiveSideCart: !state.configPages.cart.isActiveSideCart,
        },
      },
    }));
  },
});
