import { useMemo, useState } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { useEcommerceStore } from "../../../../../common/infrastructure/store";

export const useMenuPage = () => {
  const [optionSelected, setOptionSelected] = useState("orders");
  const logout = useAppStore((state) => state.logout);
  const configPage = useEcommerceStore((state) => state.configPages);
  const { menu = [] } = configPage;

  const dataSelectedMenu = useMemo(() => {
    return menu.find((item) => item.url_redirect === optionSelected);
  }, [menu, optionSelected]);

  const onChangeOptionSelected = (newOption) => {
    if (newOption === "logout") {
      logout();
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
