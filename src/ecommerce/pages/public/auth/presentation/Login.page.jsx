import { ToastContainer } from "react-toastify"
import { LoginCentered, LoginImageLeft, LoginImageRight } from "./templates"
import { useLogin } from "./view-model"
import { useEffect } from "react";

const loginTemplateOptions = {
  login_centered: <LoginCentered />,
  image_left: <LoginImageLeft />,
  image_right: <LoginImageRight />,
};

export const LoginPage = () => {
  const { loginUiType } = useLogin();

  const CURRENT_TEMPLATE =
    loginTemplateOptions[loginUiType] || "Login template not configured";
  return (
    <main>
      <>{CURRENT_TEMPLATE}</>
      <ToastContainer />
    </main>
  );
};

export default LoginPage;
