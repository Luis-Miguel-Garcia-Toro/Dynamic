import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../../../../common/infrastructure/store";

export const useHomePage = () => {
  const { user } = useAppStore();
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
