import { useState } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";

export const useMenuPage = () => {
  const [optionSelected, setOptionSelected] = useState("wallet");
  const logout = useAppStore((state) => state.logout);

  const onChangeOptionSelected = (newOption) => {
    if (newOption === "logout") {
      logout();
      return;
    }

    setOptionSelected(newOption);
  };

  return {
    onChangeOptionSelected,
    optionSelected,
  };
};
