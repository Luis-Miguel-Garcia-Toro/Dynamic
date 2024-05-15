import { useState } from "react";
import { useAppStore } from "../../../../../../../common/infrastructure/store";

export const useSidebarCategories = () => {
  const [showMenu, setShowMenu] = useState(false);
  const configPage = useAppStore((state) => state.configPages);
  const { categories = {} } = configPage;

  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return {
    categories,
    onToggleMenu,
    showMenu,
  };
};
