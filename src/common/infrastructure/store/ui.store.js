import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useUIStore = create(
  persist(
    (set) => ({
      ...initialState,
      updateTheme: (theme) => set({ theme }),
      updateConfigPage: (configPages) =>
        set((state) => ({
          configPages: { ...state.configPages, ...configPages },
        })),
      changeHeaderHeight: (height) => {
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
    }),
    { name: "uiStore" }
  )
);
