import { authStateStatus } from "../../domain";

const initialState = {
  user: undefined,
  authStatus: authStateStatus.NO_AUTHENTICATED,
  redirectAfterLogin: undefined,
  isSessionJustClosed: false,
};

export const createAuthSlice = (set) => ({
  ...initialState,
  login: (user, redirectTo) =>
    set({
      user,
      authStatus: authStateStatus.AUTHENTICATED,
      redirectAfterLogin: redirectTo,
      isSessionJustClosed: false,
    }),
  logout: () =>
    set({
      user: undefined,
      authStatus: authStateStatus.NO_AUTHENTICATED,
      isSessionJustClosed: true,
    }),
  cleanRedirectAfterLogin: () => set({ redirectAfterLogin: undefined }),
  changeIsSessionJustClosed: (value) => set({ isSessionJustClosed: value }),
});
