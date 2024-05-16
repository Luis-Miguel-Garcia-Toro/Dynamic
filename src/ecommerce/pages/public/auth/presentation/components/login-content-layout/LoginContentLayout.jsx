import PropTypes from "prop-types";
import { LoginForm } from "../login-form/LoginForm";

import { useAppStore } from "../../../../../../../common/infrastructure/store";
import Styles from "./scss/login-content-layout.module.scss";

export const LoginContentLayout = ({ className }) => {
  const { configPages } = useAppStore();
  const loginLogo = configPages?.auth?.login?.logo;

  return (
    <div className={className}>
      {loginLogo && (
        <figure className={Styles.LoginLogoContainer}>
          <img alt="" src={loginLogo} />
        </figure>
      )}

      <LoginForm />
    </div>
  );
};

LoginContentLayout.propTypes = {
  className: PropTypes.string,
};
