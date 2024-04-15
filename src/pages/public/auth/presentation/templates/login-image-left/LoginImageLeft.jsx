import {
  LoginContentLayout,
  LoginImagePanel
} from "../../components";
import Styles from "./login-image-left.module.scss";

export const LoginImageLeft = () => {
  return (
    <div className={Styles.LoginImageLeftContainer}>
      <section className={Styles.LoginImageContainer}>
        <LoginImagePanel />
      </section>
      <section className={Styles.LoginFormContainer}>
        <LoginContentLayout className={Styles.LoginFormContent} />
      </section>
    </div>
  );
};
