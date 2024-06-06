import { authStateStatus } from "../../domain";

const initialState = {
  user: undefined,
  authStatus: authStateStatus.NO_AUTHENTICATED,
  redirectAfterLogin: undefined,
};

export const createAuthSlice = (set) => ({
  ...initialState,
  login: (user, redirectTo) =>
    set({
      user,
      authStatus: authStateStatus.AUTHENTICATED,
      redirectAfterLogin: redirectTo,
    }),
  logout: () =>
    set({
      user: undefined,
      authStatus: authStateStatus.NO_AUTHENTICATED,
    }),
  cleanRedirectAfterLogin: () => set({ redirectAfterLogin: undefined }),
});
