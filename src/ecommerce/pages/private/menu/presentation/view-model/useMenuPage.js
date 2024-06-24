import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { useEcommerceStore } from "../../../../../common/infrastructure/store";

export const useMenuPage = () => {
  const [optionSelected, setOptionSelected] = useState("orders");
  const logout = useAppStore((state) => state.logout);
  const configPage = useEcommerceStore((state) => state.configPages);
  const { menu = [] } = configPage


  const dataSelectedMenu = useMemo(() => {
    return menu.find((item) => item.url_redirect === optionSelected);
  }, [menu, optionSelected]);

  const onChangeOptionSelected = (newOption) => {
    console.log(newOption);
    if (newOption === "logout") {
      logout();
      return;
    }
    setOptionSelected(newOption);
  };

  useEffect(() => {
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    let option = params.get("option")
    if (option) {
      setOptionSelected(option)
    }
  },[new URLSearchParams(window.location.href.split("?")[1])])

  return {
    dataSelectedMenu,
    onChangeOptionSelected,
    optionSelected,
  };
};
