import { LoginCentered, LoginImageLeft, LoginImageRight } from "./templates";
import { useLogin } from "./view-model";

const loginTemplateOptions = {
  LOGIN_CENTERED: <LoginCentered />,
  IMAGE_LEFT: <LoginImageLeft />,
  IMAGE_RIGHT: <LoginImageRight />,
};

export const LoginPage = () => {
  const { loginUiType } = useLogin();
  const CURRENT_TEMPLATE =
    loginTemplateOptions[loginUiType] || "Login template not configured";
  return <main>{CURRENT_TEMPLATE}</main>;
};

export default LoginPage;
