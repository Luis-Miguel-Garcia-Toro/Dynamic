import { AuthHasPassword, AuthNoPassword } from "./subcomponents";
import { useAuthMethod } from "./view-model";

export const AuthMethod = () => {
  const { hasPassword } = useAuthMethod();

  return <div>{!hasPassword ? <AuthNoPassword /> : <AuthHasPassword />}</div>;
};
