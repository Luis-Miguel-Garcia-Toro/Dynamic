import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store";
import { useMemo } from "react";
import { authMethodsViews } from "../../../../../../../common/domain";

export const useAuthMethod = () => {
  const { hasPassword, currentAuthMethodScreen } = useLoginEmartDataStore();

  const currentScreen = useMemo(() => {
    if (currentAuthMethodScreen) return currentAuthMethodScreen;
    return hasPassword
      ? authMethodsViews.AUTH_METHODS
      : authMethodsViews.CONTACT_SELECTION;
  }, [currentAuthMethodScreen, hasPassword]);

  return {
    currentScreen,
  };
};
