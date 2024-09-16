import PropTypes from "prop-types";
import { LoginForm } from "../login-form/LoginForm";
import back from "../../../../../../../assets/img/back.svg";
import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import Styles from "./scss/login-content-layout.module.scss";

export const LoginContentLayout = ({ className }) => {
  const { configPages } = useEcommerceStore();
  const loginLogo = configPages?.images?.icon_login;
  const showLoginLogo = configPages?.images?.icon_login || "off"

  return (
    <div className={className}>
      <div className={Styles.redirectEcommerce}>
        <a href="/products">
          <img src={back} alt="icon back" width="15px" height="15px"></img>
          <p>Volver a la tienda</p>
        </a>
      </div>
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
