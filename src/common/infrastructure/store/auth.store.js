import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStateStatus = {
  CHECKING: "CHECKING",
  AUTHENTICATED: "AUTHENTICATED",
  NO_AUTHENTICATED: "NO_AUTHENTICATED",
};

const initialState = {
  user: undefined,
  status: authStateStatus.NO_AUTHENTICATED,
  errorMessage: undefined,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      login: (user) =>
        set({
          user,
          status: authStateStatus.AUTHENTICATED,
          errorMessage: undefined,
        }),
      logout: (message = undefined) =>
        set({
          user: undefined,
          status: authStateStatus.NO_AUTHENTICATED,
          errorMessage: message,
        }),
    }),
    { name: "userStore" }
  )
);
