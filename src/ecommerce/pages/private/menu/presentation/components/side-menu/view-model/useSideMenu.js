import { useMemo, useState } from "react";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store";

export const useSideMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const configPage = useEcommerceStore((state) => state.configPages);
  const { menu = [], globals } = configPage;
  const { headerHeight } = globals;

  const sortMenuOptions = useMemo(() => {
    if (!menu) return [];

    const logoutOption = menu.find(
      (option) => option.url_redirect === "logout"
    );
    const otherOptions = menu.filter(
      (option) => option.url_redirect !== "logout"
    );

    const sortMenuOptions = otherOptions.sort((a, b) => {
      return a.order - b.order;
    });

    const newOptions = logoutOption
      ? [...sortMenuOptions, logoutOption]
      : sortMenuOptions;
    return newOptions;
  }, [menu]);

  const onToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return {
    headerHeight,
    isMenuActive,
    menu,
    onToggleMenu,
    sortMenuOptions,
  };
};
