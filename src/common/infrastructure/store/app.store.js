import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAuthSlice } from "./auth.slice";
import { createUiSlice } from "./ui.slice";

export const useAppStore = create(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    }),
    { name: "app-store" }
  )
);
