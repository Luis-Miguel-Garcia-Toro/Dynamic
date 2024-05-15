import { useMemo } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";

export const useLogin = () => {
  const { configPages } = useAppStore();
  const loginUiType = useMemo(() => {
    return configPages?.auth?.login?.uiType;
  }, [configPages]);

  return {
    loginUiType,
  };
};
