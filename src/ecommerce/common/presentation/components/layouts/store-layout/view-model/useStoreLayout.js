import { useAppStore } from "../../../../../../../common/infrastructure/store";

export const useStoreLayout = () => {
  const configPage = useAppStore((state) => state.configPages);
  const headerHeight = configPage?.globals?.headerHeight || 0;
  const cartMode = configPage?.cart?.mode;

  return {
    headerHeight,
    cartMode,
  };
};
