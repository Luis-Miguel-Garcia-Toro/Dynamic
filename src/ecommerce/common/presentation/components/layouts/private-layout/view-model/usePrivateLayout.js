import { useUIStore } from "../../../../../../../common/infrastructure/store/ui.store";

export const usePrivateLayout = () => {
  const headerHeight = useUIStore(
    (state) => state.configPages.globals.headerHeight
  );

  return {
    headerHeight,
  };
};
