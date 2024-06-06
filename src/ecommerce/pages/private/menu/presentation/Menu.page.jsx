import { SideMenu } from "./components";
import { Dashboard, Faq, Help, Orders, Profile, Wallet } from "./options";
import Styles from "./scss/menu-page.module.scss";
import { useMenuPage } from "./view-model/useMenuPage";

const optionsMenu = {
  dashboard: <Dashboard />,
  faq: <Faq />,
  help: <Help />,
  orders: <Orders />,
  profile: <Profile />,
  wallet: <Wallet />,
};

const MenuPage = () => {
  const { onChangeOptionSelected, optionSelected } = useMenuPage();

  return (
    <div>
      <SideMenu
        onChangeOptionSelected={onChangeOptionSelected}
        optionSelected={optionSelected}
      />
      <div className={Styles.MenuContent}>
        {optionsMenu[optionSelected] || <Dashboard />}
      </div>
    </div>
  );
};

export default MenuPage;
