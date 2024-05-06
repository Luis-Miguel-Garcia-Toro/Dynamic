import PropTypes from "prop-types";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useAuthStore } from "../../../../../../common/infrastructure/store/auth.store";
import Styles from "./scss/private-layout.module.scss";

export const PrivateLayout = ({ children }) => {
  const { logout } = useAuthStore();

  const onLogout = () => {
    logout();
  };

  return (
    <main className={Styles.PrivateLayoutContainer}>
      <header className={Styles.PrivateLayoutHeader}>
        <div onClick={onLogout} className={Styles.LogoutContainer}>
          <span>Salir</span>
          <MdOutlinePowerSettingsNew size={40} color="var(--color-primary)" />
        </div>
      </header>
      <div className={Styles.PrivateLayoutContent}>{children}</div>
    </main>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
