import { useMemo, useState } from "react";
import { useAppStore } from "../../../../../../../../common/infrastructure/store";

export const useSideMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const configPage = useAppStore((state) => state.configPages);
  const { menuOptions = [], globals } = configPage;
  const { headerHeight } = globals;

  const sortMenuOptions = useMemo(() => {
    if (!menuOptions) return [];

    const logoutOption = menuOptions.find(
      (option) => option.url_redirect === "logout"
    );
    const otherOptions = menuOptions.filter(
      (option) => option.url_redirect !== "logout"
    );

    const sortMenuOptions = otherOptions.sort((a, b) => {
      return a.order - b.order;
    });

    const newOptions = logoutOption
      ? [...sortMenuOptions, logoutOption]
      : sortMenuOptions;
    return newOptions;
  }, [menuOptions]);

  const onToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return {
    headerHeight,
    isMenuActive,
    menuOptions,
    onToggleMenu,
    sortMenuOptions,
  };
};
