import PropTypes from "prop-types";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import Styles from "./scss/private-layout.module.scss";
import MenuOptions from "../../../../../pages/private/home/presentation/subPages/MenuOptions";
export const PrivateLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useAppStore();

  const onLogout = () => {
    setShowMenu(false);
    logout();
  };

  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className={Styles.PrivateLayoutContainer}>
                <MenuOptions />

      <header className={Styles.PrivateLayoutHeader}>
        <div className={Styles.PrivateLayoutHeaderbar}>
        </div>
        <div className={Styles.ConfigContainer}>
          <div onClick={onToggleMenu} className={Styles.ConfigIconContainer}>
            <IoSettingsSharp size={25} />
          </div>

          {showMenu && (
            <nav className={Styles.ConfigMenu}>
              <ul>
                <li onClick={onLogout}>
                  <MdOutlinePowerSettingsNew />
                  <span>Salir</span>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      <div className={Styles.PrivateLayoutContent}>{children}</div>
    </main>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
