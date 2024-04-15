import { useUIStore } from "@/common/infrastructure/store";
import { useMemo } from "react";

export const useLogin = () => {
  const { configPages } = useUIStore();

  const loginUiType = useMemo(() => {
    return configPages?.auth?.login?.uiType;
  }, [configPages]);

  return {
    loginUiType,
  };
};
