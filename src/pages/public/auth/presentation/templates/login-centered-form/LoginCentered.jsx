import { LoginContentLayout } from "../../components";
import Styles from "./login-centered-form.module.scss";

export const LoginCentered = () => {
  return (
    <div className={Styles.LoginCenteredContainer}>
      <LoginContentLayout className={Styles.LoginCenteredContent} />
    </div>
  );
};
