import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  configPages: {},
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
      updateConfigPage: (configPages) => set({ configPages }),
    }),
    { name: "uiStore" }
  )
);
