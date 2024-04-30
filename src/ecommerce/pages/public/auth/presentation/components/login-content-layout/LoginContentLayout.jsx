import { useUIStore } from "@/common/infrastructure/store/ui.store";
import PropTypes from "prop-types";
import { LoginForm } from "../login-form/LoginForm";

import Styles from "./scss/login-content-layout.module.scss";

export const LoginContentLayout = ({ className }) => {
  const { configPages } = useUIStore();
  const loginLogo = configPages?.auth?.login?.logo;

  return (
    <div className={className}>
      {loginLogo && (
        <figure className={Styles.LoginLogoContainer}>
          <img alt="Logo" src={loginLogo} />
        </figure>
      )}

      <LoginForm />
    </div>
  );
};

LoginContentLayout.propTypes = {
  className: PropTypes.string,
};
