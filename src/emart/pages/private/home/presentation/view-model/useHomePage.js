import { useAuthStore } from "../../../../../../common/infrastructure/store/auth.store";

export const useHomePage = () => {
  const { user, logout } = useAuthStore();

  return {
    businessList: user.businessUnitList,
    logout,
    nit: user.nit,
  };
};
