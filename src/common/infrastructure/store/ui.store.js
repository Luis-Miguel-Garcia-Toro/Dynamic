import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  configPages: {},
  theme: {
    colors: {
      primary: "#3ca1ff",
      secondary: "#ffffff",
      text: "#132436",
    },
  },
};

export const useUIStore = create(
  persist(
    (set) => ({
      ...initialState,
      updateTheme: (theme) => set({ theme }),
      updateConfigPage: (configPages) => set({ configPages }),
    }),
    { name: "uiStore" }
  )
);
