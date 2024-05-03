import { ContactSelection } from "../contact-selection/ContactSelection"
import { AuthMethodSelection } from "./subcomponents"
import { useAuthMethod } from "./view-model"

export const AuthMethod = () => {
  const { hasPassword, authMethodSelected } = useAuthMethod();

  return (
    <div>
      {!hasPassword || authMethodSelected === "code" ? (
        <ContactSelection />
      ) : (
        <AuthMethodSelection />
      )}
    </div>
  );
};
