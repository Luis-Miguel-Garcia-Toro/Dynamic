import {
  LoginContentLayout,
  LoginImagePanel
} from "../../components";
import Styles from "./scss/login-image-right.module.scss";

export const LoginImageRight = () => {
  return (
    <div className={Styles.LoginImageRightContainer}>
      <section className={Styles.LoginFormContainer}>
        <LoginContentLayout className={Styles.LoginFormContent} />
      </section>
      <section className={Styles.LoginImageContainer}>
        <LoginImagePanel />
      </section>
    </div>
  );
};
