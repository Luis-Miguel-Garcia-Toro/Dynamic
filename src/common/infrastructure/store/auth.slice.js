import { authStateStatus } from "../../domain";

const initialState = {
  user: undefined,
  authStatus: authStateStatus.NO_AUTHENTICATED,
};

export const createAuthSlice = (set) => ({
  ...initialState,
  login: (user) =>
    set({
      user,
      authStatus: authStateStatus.AUTHENTICATED,
    }),
  logout: () =>
    set({
      user: undefined,
      authStatus: authStateStatus.NO_AUTHENTICATED,
    }),
});
