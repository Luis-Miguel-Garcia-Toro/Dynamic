import { useAppStore } from "../../../../../../../common/infrastructure/store";

export const usePrivateLayout = () => {
  const headerHeight = useAppStore(
    (state) => state.configPages.globals.headerHeight
  );

  return {
    headerHeight,
  };
};
