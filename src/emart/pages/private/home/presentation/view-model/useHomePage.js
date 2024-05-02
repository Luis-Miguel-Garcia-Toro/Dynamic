import { useAuthStore } from "@/common/infrastructure/store/auth.store";
import { useNavigate } from "react-router-dom";

export const useHomePage = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const onNavigateToBranch = (business) => {
    navigate(`/branch/${business.business}`, { state: { business } });
  };

  const onLogout = () => {
    logout();
  };

  return {
    businessList: user.businessUnitList,
    nit: user.nit,
    onLogout,
    onNavigateToBranch,
  };
};
