import { useState } from "react";
import { useEcommerceStore } from "../../../../../../../../common/infrastructure/store";

export const useSidebarCategories = () => {
  const [showMenu, setShowMenu] = useState(false);
  const configPage = useEcommerceStore((state) => state.configPages);
  const { categories = {}, globals } = configPage;
  const { headerHeight } = globals;

  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return {
    categories,
    headerHeight,
    onToggleMenu,
    showMenu,
  };
};
