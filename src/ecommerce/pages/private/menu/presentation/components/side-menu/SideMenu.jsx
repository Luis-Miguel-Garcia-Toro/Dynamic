import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { getMenuIcons } from "../../utils/getMenuIcon";
import Styles from "./scss/side-menu.module.scss";
import { useSideMenu } from "./view-model/useSideMenu";

export const SideMenu = ({ onChangeOptionSelected, optionSelected }) => {
  const { headerHeight, isMenuActive, onToggleMenu, sortMenuOptions } =
    useSideMenu();

  return (
    <div className={Styles.SideMenuContainer}>
      <aside
        style={{
          paddingTop: `${headerHeight}px`,
        }}
        className={`${Styles.SideMenu} ${isMenuActive ? Styles.Active : ""}`}
      >
        <nav>
          <button onClick={onToggleMenu} className={Styles.CloseButton}>
            <IoClose />
          </button>

          <ul>
            {sortMenuOptions.map((item) => (
              <li key={item.url_redirect}>
                <button
                  className={`${Styles.SideMenuItemButton} ${
                    optionSelected === item.url_redirect ? Styles.Selected : ""
                  }`}
                  onClick={() => {
                    onChangeOptionSelected(item.url_redirect);
                    onToggleMenu();
                  }}
                >
                  {getMenuIcons(item.url_redirect)}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <button onClick={onToggleMenu} className={Styles.OpenButton}>
        <MdMenuOpen />
      </button>
    </div>
  );
};

SideMenu.propTypes = {
  onChangeOptionSelected: PropTypes.func.isRequired,
  optionSelected: PropTypes.string,
};
