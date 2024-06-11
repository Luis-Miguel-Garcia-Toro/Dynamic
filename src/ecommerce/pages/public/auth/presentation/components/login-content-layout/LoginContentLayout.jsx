import PropTypes from "prop-types";
import { LoginForm } from "../login-form/LoginForm";

import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import Styles from "./scss/login-content-layout.module.scss";

export const LoginContentLayout = ({ className }) => {
  const { configPages } = useEcommerceStore();
  const loginLogo = configPages?.images?.icon;
  const showLoginLogo = configPages?.images?.icon_login || "off"

  return (
    <div className={className}>
      {loginLogo && showLoginLogo !== "off" && (
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
