import { SideMenu } from "./components";
import { Dashboard, Faq, Help, Orders, Profile, Wallet } from "./options";
import Styles from "./scss/menu-page.module.scss";
import { useMenuPage } from "./view-model/useMenuPage";
import { useEffect, useState } from "react";

const optionsMenu = {
  dashboard: <Dashboard />,
  faq: <Faq />,
  help: <Help />,
  orders: <Orders />,
  profile: <Profile />,
  wallet: <Wallet />,
};

const MenuPage = () => {
  const { onChangeOptionSelected, optionSelected, dataSelectedMenu } =
    useMenuPage();
  return (
    <div>
      <SideMenu
        onChangeOptionSelected={onChangeOptionSelected}
        optionSelected={optionSelected}
      />
      <div className={`${Styles.MenuContent} fadeIn`}>
        <h1>{dataSelectedMenu?.title}</h1>
        {optionsMenu[optionSelected] || <Dashboard />}
      </div>
    </div>
  );
};

export default MenuPage;
