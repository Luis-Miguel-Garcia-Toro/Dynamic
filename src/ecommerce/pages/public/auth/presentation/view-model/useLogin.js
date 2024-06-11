import { useMemo } from "react";
import { useEcommerceStore } from "../../../../../common/infrastructure/store";

export const useLogin = () => {
  const { configPages } = useEcommerceStore();
  const loginUiType = useMemo(() => {
    return configPages?.ui_type;
  }, [configPages]);

  return {
    loginUiType,
  };
};
