import { useState } from "react";
import { useUIStore } from "../../../../../../../common/infrastructure/store/ui.store";

export const useSidebarCategories = () => {
  const [showMenu, setShowMenu] = useState(false);
  const configPage = useUIStore((state) => state.configPages);
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
