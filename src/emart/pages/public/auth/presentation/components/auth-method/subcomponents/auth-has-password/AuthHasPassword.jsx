import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store/login-data.store"
import { useMemo } from "react"
import { authMethodsViews } from "../../../../../../../../common/domain"
import { AuthMethodSelection } from "../auth-method-selection/AuthMethodSelection"
import { ContactSelection } from "../contact-selection/ContactSelection"

const views = {
  [authMethodsViews.AUTH_METHODS]: <AuthMethodSelection />,
  [authMethodsViews.CONTACT_SELECTION]: <ContactSelection />,
};

export const AuthHasPassword = () => {
  const { currentAuthMethodScreen } = useLoginEmartDataStore();

  const currentScreen = useMemo(() => {
    if (currentAuthMethodScreen) return currentAuthMethodScreen;
    return authMethodsViews.AUTH_METHODS;
  }, [currentAuthMethodScreen]);

  return <>{views[currentScreen]}</>;
};
