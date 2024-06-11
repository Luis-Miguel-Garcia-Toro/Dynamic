import { LoginCentered, LoginImageLeft, LoginImageRight } from "./templates";
import { useLogin } from "./view-model";

const loginTemplateOptions = {
  login_centered: <LoginCentered />,
  image_left: <LoginImageLeft />,
  image_right: <LoginImageRight />,
};

export const LoginPage = () => {
  const { loginUiType } = useLogin();
  
  const CURRENT_TEMPLATE =
    loginTemplateOptions[loginUiType] || "Login template not configured";
  return <main>{CURRENT_TEMPLATE}</main>;
};

export default LoginPage;
