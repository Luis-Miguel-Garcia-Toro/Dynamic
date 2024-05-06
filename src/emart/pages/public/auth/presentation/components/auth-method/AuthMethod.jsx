import { authMethodsViews } from "../../../../../../common/domain";
import { VerificationCode } from "../subcomponents";
import {
  AuthMethodSelection,
  ContactSelection
} from "./subcomponents";
import { useAuthMethod } from "./view-model";

const views = {
  [authMethodsViews.AUTH_METHODS]: <AuthMethodSelection />,
  [authMethodsViews.CONTACT_SELECTION]: <ContactSelection />,
  [authMethodsViews.VERIFICATION_CODE]: <VerificationCode />,
};

export const AuthMethod = () => {
  const { currentScreen } = useAuthMethod();

  return <>{views[currentScreen]}</>;
};
