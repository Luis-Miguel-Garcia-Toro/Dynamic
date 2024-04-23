import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authStateStatus } from "../../domain/auth/auth.types";

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
