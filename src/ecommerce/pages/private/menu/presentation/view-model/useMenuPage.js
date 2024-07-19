import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { useEcommerceStore, usePageContext } from "../../../../../common/infrastructure/store";

export const useMenuPage = () => {
  // const [optionSelected, setOptionSelected] = useState("orders");
  const {optionSelected, setOptionSelected} = usePageContext();
  const logout = useAppStore((state) => state.logout);
  const configPage = useEcommerceStore((state) => state.configPages);
  const { menu = [] } = configPage


  const dataSelectedMenu = useMemo(() => {
    return menu.find((item) => item.url_redirect === optionSelected);
  }, [menu, optionSelected]);

  const onChangeOptionSelected = (newOption) => {
    if (newOption === "logout") {
      logout();
      window.location.replace("/login");
      return;
    }
    setOptionSelected(newOption);
  };

  return {
    dataSelectedMenu,
    onChangeOptionSelected,
    optionSelected,
  };
};
