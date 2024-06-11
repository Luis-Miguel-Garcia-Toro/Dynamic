import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice } from "./auth.slice";

export const useAppStore = create(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      { name: "app-store" }
    )
  )
);
