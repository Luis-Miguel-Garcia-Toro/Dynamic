import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store/login-data.store";
import { useMemo } from "react";
import { authMethodsViews } from "../../../../../../../../common/domain";
import { VerificationCode } from "../../../subcomponents";
import { ContactSelection } from "../contact-selection/ContactSelection";

const views = {
  [authMethodsViews.CONTACT_SELECTION]: <ContactSelection />,
  [authMethodsViews.VERIFICATION_CODE]: <VerificationCode />,
};

export const AuthNoPassword = () => {
  const { currentAuthMethodScreen } = useLoginEmartDataStore();

  const currentScreen = useMemo(() => {
    if (currentAuthMethodScreen) return currentAuthMethodScreen;
    return authMethodsViews.CONTACT_SELECTION;
  }, [currentAuthMethodScreen]);

  return <>{views[currentScreen]}</>;
};
