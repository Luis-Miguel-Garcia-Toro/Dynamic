import { useAppStore } from "../../../../../../../common/infrastructure/store";

export const useStoreLayout = () => {
  const headerHeight = useAppStore(
    (state) => state.configPages.globals.headerHeight
  );

  return {
    headerHeight,
  };
};
