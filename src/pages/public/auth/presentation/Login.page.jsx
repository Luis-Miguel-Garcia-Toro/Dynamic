import { LoginCentered, LoginImageLeft, LoginImageRight } from "./templates";
import { useLogin } from "./view-model";

const loginTemplateOptions = {
  LOGIN_CENTERED: <LoginCentered />,
  IMAGE_LEFT: <LoginImageLeft />,
  IMAGE_RIGHT: <LoginImageRight />,
};

export const LoginPage = () => {
  const { loginUiType } = useLogin();

  return <main>{loginTemplateOptions[loginUiType]}</main>;
};


export default LoginPage;