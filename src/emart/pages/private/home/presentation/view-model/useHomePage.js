import { useAuthStore } from "@/common/infrastructure/store/auth.store";
import { useNavigate } from "react-router-dom";

export const useHomePage = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const onNavigateToBranch = (business) => {
    navigate(`/branch/${business.business}`, { state: { business } });
  };

  return {
    businessList: user.businessUnitList,
    nit: user.nit,
    onNavigateToBranch,
  };
};
